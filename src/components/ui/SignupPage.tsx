import { useRef } from "react";
import { InputComponent } from "../CreateContentModal";
import Button from "./Button";
import axios from "axios";
import {BACKEND_URL} from '../../../config'
import { useNavigate } from "react-router-dom";
export default function SignupPage(){
    const usernameRef=useRef<HTMLInputElement>(null);
    const passwordRef=useRef<HTMLInputElement>(null);
    const navigate=useNavigate();
    async function handleSignup(){
        const username=usernameRef.current?.value;
        const password=passwordRef.current?.value;
        console.log(username);
        await axios.post(BACKEND_URL+"/api/v1/signup",{
            username,password
        })
        alert("you have signed up");
        navigate("/signin");

    }
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-gray-400 rounded-xl p-15">
                <InputComponent reference={usernameRef} placeholder="Username"></InputComponent>
                <InputComponent reference={passwordRef} placeholder="Password"></InputComponent>
                <div className="flex justify-center m-4 items-center">
                    <Button fullwidth={true} onclick={()=>handleSignup()} variant="secondary" text="Signup" size="md"></Button>

                </div>
            </div>
        </div>
    )
}