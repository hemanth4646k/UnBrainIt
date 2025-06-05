import CrossIcon from "../icons/CrossIcon";
import Button from "./ui/Button";

export interface CreateContentModalProps{
    openCreateContentModal:boolean;
    setOpenCreateContentModal:React.Dispatch<React.SetStateAction<boolean>>
}

export default function CreateContentModal(props:CreateContentModalProps){
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
                    <InputComponent placeholder="Title"></InputComponent>
                    <InputComponent placeholder="Link"></InputComponent>
                </div>
                <div className="flex justify-center">
                    <Button onclick={()=>props.setOpenCreateContentModal(s=>!s)} text="Submit" variant="secondary" size="md"></Button>

                </div>
            </div>
        </div>}
        </>
    )
}

interface InputComponentProps{
    placeholder:string;
    reference?:any;
}
export function InputComponent(props:InputComponentProps){
    return (
        <div className="flex justify-center">
            <input type="text" ref={props.reference} className="bg-white p-2 w-5/6 my-2 rounded-lg" placeholder={props.placeholder}/>
        </div>
    )
}