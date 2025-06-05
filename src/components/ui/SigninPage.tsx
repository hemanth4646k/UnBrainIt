import { InputComponent } from "../CreateContentModal";
import Button from "./Button";

export default function SigninPage(){
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-gray-400 rounded-xl p-15">
                <InputComponent placeholder="Username"></InputComponent>
                <InputComponent placeholder="Password"></InputComponent>
                <div className="flex justify-center m-4 items-center">
                    <Button fullwidth={true} onclick={()=>console.log("signin Button Clicked")} variant="secondary" text="Submit" size="md"></Button>

                </div>
                <div className="flex justify-between flex-wrap p-2">Not signed up yet?
                    <a href="/signup" className="text-blue-600">SignUp</a>
                </div>
            </div>
        </div>
    )
}