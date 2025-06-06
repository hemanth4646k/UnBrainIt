"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const index_1 = require("./index");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const middleware = (req, res, next) => {
    const token = req.headers['token'];
    const userid = jsonwebtoken_1.default.verify(token, index_1.JWT_SECRET);
    if (userid) {
        req.userId = userid;
        next();
    }
    else {
        res.status(403).json({ message: 'You are not logged in' });
    }
};
exports.middleware = middleware;
