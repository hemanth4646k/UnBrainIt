import axios from "axios";
import { InputComponent } from "../CreateContentModal";
import Button from "./Button";
import { BACKEND_URL } from "../../../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import DashBoard from "../Dashboard";

export default function SigninPage(){
    const usernameRef=useRef<HTMLInputElement>(null);
    const passwordRef=useRef<HTMLInputElement>(null);
    const navigate=useNavigate();
    async function handleSignin(){
        const username=usernameRef.current?.value;
        const password=passwordRef.current?.value;
        console.log(username);
        const response=await axios.post(BACKEND_URL+"/api/v1/signin",{
            username,password
        })
        const jwt=response.data.token;
        localStorage.setItem('token',jwt);
        navigate("/dashboard");
    }
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-gray-400 rounded-xl p-15">
                <InputComponent placeholder="Username"></InputComponent>
                <InputComponent placeholder="Password"></InputComponent>
                <div className="flex justify-center m-4 items-center">
                    <Button fullwidth={true} onclick={()=>handleSignin()} variant="secondary" text="Submit" size="md"></Button>

                </div>
                <div className="flex justify-between flex-wrap p-2">Not signed up yet?
                    <a href="/signup" className="text-blue-600">SignUp</a>
                </div>
            </div>
        </div>
    )
}