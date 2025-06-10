"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("./db");
const middleware_1 = require("./middleware");
exports.JWT_SECRET = process.env.JWT_SECRET;
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post('/api/v1/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // zod validation and hash password
    try {
        const { username, password } = req.body;
        const userExists = yield db_1.UserModel.findOne({ username });
        if (userExists) {
            res.json({ errMessage: "The username is already in use" });
        }
        yield db_1.UserModel.create({ username, password });
        res.json({ message: "user Signed up successfully" });
    }
    catch (e) {
        res.status(411).json({ message: "User Already exists" });
    }
}));
app.post('/api/v1/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield db_1.UserModel.findOne({
        username,
        password
    });
    if (user) {
        const token = jsonwebtoken_1.default.sign(user._id.toString(), exports.JWT_SECRET);
        res.json({ message: "user signed in", token });
    }
    else {
        res.status(404).json({ message: "User Not found" });
    }
}));
app.post('/api/v1/content', middleware_1.middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Auth middleware
    const { title, link } = req.body;
    const tags = (req.body.tags) ? req.body.tags : [];
    yield db_1.ContentModel.create({
        title, link,
        userId: req.userId,
        tags: tags,
        share: false
    });
    res.json({
        message: "content has been created"
    });
}));
app.get('/api/v1/content', middleware_1.middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const content = yield db_1.ContentModel.find({ userId: req.userId });
        res.json({ content });
    }
    catch (e) {
        res.status(404).json({ message: "Content not found" });
    }
}));
app.delete('/api/v1/content', middleware_1.middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.body.contentId;
    yield db_1.ContentModel.deleteMany({
        _id: contentId,
        userId: req.userId
    });
    res.json({ message: "deleted" });
}));
app.put('/api/v1/allcontent/share', middleware_1.middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //share is input bool value that tells us to enable share or not
    const share = req.body.share;
    const contentId = req.body.contentId;
    const content = yield db_1.ContentModel.findOne({
        _id: contentId,
        userId: req.userId
    });
    if (share) {
        if (content) {
            if (content.share) {
                res.json({ message: "the Content is shareable" });
            }
            else {
                content.link = content._id.toString();
                content.share = true;
                yield content.save();
                res.json({ message: "The content is now sharable" });
            }
        }
        else {
            res.status(404).json({ message: "content not found" });
        }
    }
    else {
        if (content) {
            content.share = false;
            yield content.save();
            res.json({ message: 'content is now not shareable' });
        }
        else {
            res.status(404).json({ message: "content does not exist" });
        }
    }
}));
app.get('/api/v1/allcontent/:shareLink', middleware_1.middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.params.shareLink;
    const searchedContent = yield db_1.ContentModel.findOne({
        _id: contentId
    });
    if (searchedContent && (searchedContent.share || req.userId == searchedContent.userId)) {
        res.json({ searchedContent: searchedContent });
    }
    else {
        res.json({ message: "Content Not found or Inaccessible" });
    }
}));
function main() {
    try {
        mongoose_1.default.connect(process.env.MONGO_URL);
    }
    catch (e) {
        console.log("Mongodb connection failed");
        process.exit(1);
    }
    app.listen(3000);
}
main();
