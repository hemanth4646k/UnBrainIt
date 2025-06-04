import { iconType } from "../../icons/iconIdentifier";

export interface ButtonProps{
    variant:'primary'|'secondary';
    size:'sm'|'md'|'lg';
    text:string;
    startIcon?:"plus"|"share";
    endIcon?:any;
    onclick:()=>void;

}
/*
IMPORTANT : leave a space at the end for correct rendering in the below className strings
*/
const variantStyles={
    primary:"flex items-center text-white bg-purple-700 ",
    secondary:"flex items-center bg-violet-200 text-violet-800  ",
    sm:"px-2 py-1 text-sm rounded-md ",
    md:"px-4 py-2 text-md rounded-lg ",
    lg:"px-6 py-3 text-lg rounded-xl ",
}


export default function Button(props:ButtonProps){
    const variant=variantStyles[props.variant];
    const size=variantStyles[props.size];
    const iconProps={size:props.size,color:props.variant==='secondary'?'stroke-violet-800':'stroke-white'}
    return (
        <button onClick={props.onclick} className={variant+size}>
            {props.startIcon&&iconType(props.startIcon,iconProps)} 
            {props.text}
            {props.endIcon&&iconType(props.endIcon,iconProps)} 
        </button>
    )
}