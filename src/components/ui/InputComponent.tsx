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