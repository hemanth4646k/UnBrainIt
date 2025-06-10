interface InputComponentProps{
    placeholder:string;
    reference?:any;
    onchange?:()=>void;
    onkeydown?:(e:React.KeyboardEvent<HTMLInputElement>)=>void;
}
export function InputComponent(props:InputComponentProps){
    return (
        <div className="flex justify-center w-full">
            <input type="text" onKeyDown={props.onkeydown} onChange={props.onchange} ref={props.reference} className="transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500/80 border border-slate-500 shadow-md shadow-slate-400 bg-white p-2 w-5/6 my-4 rounded-lg" placeholder={props.placeholder}/>
        </div>
    )
}