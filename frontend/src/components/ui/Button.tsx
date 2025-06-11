import type { ReactElement } from "react";
import { iconType } from "../../icons/iconIdentifier";

export interface ButtonProps{
    variant:'primary'|'secondary';
    size:'sm'|'md'|'lg';
    text:string;
    startIcon?:"plus"|"share";
    endIcon?:any;
    onclick:()=>void;
    fullwidth?:boolean;
    extraClass?:string;
    children?:ReactElement;
    disabled?:boolean;
}
/*
IMPORTANT : leave a space at the end for correct rendering in the below className strings
*/
const variantStyles={
    primary:"flex justify-center items-center text-white bg-purple-700 cursor-pointer hover:bg-violet-200 hover:text-violet-800 transition-all ease-in-out duration-150 ",
    secondary:"flex items-center justify-center bg-violet-200 text-violet-800  cursor-pointer hover:bg-violet-700 hover:text-white transition-all ease-in-out duration-150 ",
    sm:"px-2 py-1 text-sm rounded-md ",
    md:"px-4 py-2 text-md rounded-lg ",
    lg:"px-6 py-3 text-lg rounded-xl ",
}


export default function Button(props:ButtonProps){
    const variant=variantStyles[props.variant];
    const size=variantStyles[props.size];
    const fullwidth=props.fullwidth?" w-full":"";
    const iconProps={size:props.size,color:props.variant==='secondary'?'stroke-violet-800':'stroke-white'}
    return (
        <button onClick={props.onclick} className={variant+size+fullwidth+" "+props.extraClass+" disabled:opacity-50 disabled:pointer-events-none "} disabled={props.disabled}>
            {props.startIcon&&iconType(props.startIcon,iconProps)} 
            {props.children?props.children: props.text}
            {props.endIcon&&iconType(props.endIcon,iconProps)} 
        </button>
    )
}