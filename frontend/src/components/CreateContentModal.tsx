import { useRef } from "react";
import CrossIcon from "../icons/CrossIcon";
import Button from "./ui/Button";
import { InputComponent } from "./ui/InputComponent";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export interface CreateContentModalProps{
    openCreateContentModal:boolean;
    setOpenCreateContentModal:React.Dispatch<React.SetStateAction<boolean>>
    refresh?:()=>void;
}

export default function CreateContentModal(props:CreateContentModalProps){
    const titleRef=useRef<HTMLInputElement>(null);
    const linkRef=useRef<HTMLInputElement>(null);
    async function handleCreateContent(){
        const title=titleRef.current?.value;
        const link=linkRef.current?.value;
        await axios.post(BACKEND_URL+"/api/v1/content",{
            title,
            link
        },{
            headers:{
                token:localStorage.getItem("token")
            }
        });
        props.setOpenCreateContentModal(s=>!s);
        props.refresh&&props.refresh();
    }
    return (
        <>
        {props.openCreateContentModal&&<div className="w-screen h-screen fixed top-0 left-0 z-500 bg-slate-200/30 backdrop-blur-xs
        flex justify-center items-center ">
            <div className="w-50 h-50 rounded-xl bg-violet-100 ">
                <div className="flex justify-between">
                    <h1 className="p-2 ml-4">hello</h1>
                    <CrossIcon openCreateContentModal={props.openCreateContentModal} setOpenCreateContentModal={props.setOpenCreateContentModal}></CrossIcon>
                </div>
                <div>
                    <InputComponent reference={titleRef} placeholder="Title"></InputComponent>
                    <InputComponent reference={linkRef} placeholder="Link"></InputComponent>
                </div>
                <div className="flex justify-center">
                    <Button onclick={()=>handleCreateContent()} text="Submit" variant="secondary" size="md"></Button>

                </div>
            </div>
        </div>}
        </>
    )
}

