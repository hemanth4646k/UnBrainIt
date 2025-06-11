import { useRef, useState } from "react";
import Button from "./Button";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { BACKEND_URL } from "../../../config";
import { useNavigate } from "react-router-dom";
import { InputComponent } from "./InputComponent";
import SpinnerLoader from "./SpinnerLoader";
import z from "zod";
const usernameSchema = z
  .string()
  .min(3, "Username must be at least 3 characters long")
  .max(20, "Username must not exceed 20 characters")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "Username can only contain letters, numbers, and underscores"
  )
  .refine(
    (val) => !val.startsWith("_"),
    "Username cannot start with underscore"
  )
  .refine((val) => !val.endsWith("_"), "Username cannot end with underscore");

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .max(128, "Password must not exceed 128 characters")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(
    /[^a-zA-Z0-9]/,
    "Password must contain at least one special character"
  );

export default function SigninPage() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [unameError, setUnameError] = useState<string[]>([]);
  const [extraError, setExtraError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState<string[]>([]);
  const navigate = useNavigate();
  let curTime = 0;
  async function handleSignin() {
    if (unameError.length !== 0 || usernameRef.current?.value.length === 0) {
      usernameRef.current?.focus();
      return;
    } else if (
      passwordError.length !== 0 ||
      passwordRef.current?.value.length == 0
    ) {
      passwordRef.current?.focus();
      return;
    }
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    let response: AxiosResponse<any, any>;
    try {
      setLoading(true);
      response = await axios.post(BACKEND_URL + "/api/v1/signin", {
        username,
        password,
      });
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/dashboard");
    } catch (e) {
      const err = e as AxiosError<any, any>;
      setExtraError(err.response?.data.errMessage);
    } finally {
      setLoading(false);
    }
  }
  function handleUsernameChange() {
    setExtraError("");
    const curUname = usernameRef.current?.value as string;
    const isValid = usernameSchema.safeParse(curUname);
    if (isValid.success) {
      setUnameError([]);
    } else {
      setUnameError(isValid.error.issues.map((s) => s.message));
    }
  }
  function handlePasswordChange() {
    setExtraError("");
    const curPass = passwordRef.current?.value as string;
    const isValid = passwordSchema.safeParse(curPass);
    if (isValid.success) {
      setPasswordError([]);
    } else {
      setPasswordError(isValid.error.issues.map((s) => s.message));
    }
  }
  function debouncedUnameChange() {
    clearTimeout(curTime);
    curTime = setTimeout(handleUsernameChange, 300);
  }
  function debouncedPassChange() {
    clearTimeout(curTime);
    curTime = setTimeout(handlePasswordChange, 300);
  }
  return (
    <div className="h-screen w-screen bg-white flex justify-center pt-15">
      <div className="bg-white shadow-md rounded-xl w-[500px] m-2 pt-15 h-[550px] flex flex-col items-center">
        <h1 className="text-2xl font-semibold pb-4">Sign In</h1>
        <InputComponent
          reference={usernameRef}
          onchange={debouncedUnameChange}
          placeholder="Username"
        ></InputComponent>
        {unameError.map((s) => (
          <p className="text-xs text-red-600">{s}</p>
        ))}
        <InputComponent
          onkeydown={(e) => {
            if (e.key === "Enter") {
              handleUsernameChange();
              handlePasswordChange();
              handleSignin();
            }
          }}
          reference={passwordRef}
          onchange={debouncedPassChange}
          placeholder="Password"
        ></InputComponent>
        {passwordError.map((s) => (
          <p className="text-xs text-red-600">{s}</p>
        ))}
        <p className="text-xs text-red-600">{extraError}</p>
        <div
          className={`flex justify-center m-4 pt-2 items-center w-5/6 ${
            loading ? "cursor-not-allowed " : ""
          }`}
        >
          <Button
            extraClass="shadow-lg border border-violet-400 shadow-violet-300 "
            disabled={loading}
            fullwidth={true}
            onclick={() => handleSignin()}
            variant="secondary"
            text="SignIn"
            size="lg"
          >
            <div className="flex items-center">
              {loading ? (
                <SpinnerLoader text="Signing in..." />
              ) : (
                <div>Sign in</div>
              )}
            </div>
          </Button>
        </div>
        <div className="flex justify-between flex-wrap p-2">
          Not signed up yet?
          <span className="p-2"></span>
          <a href="/signup" className="text-blue-600">
            SignUp
          </a>
        </div>
      </div>
    </div>
  );
}
