import PlusIcon from "./PlusIcon";
import ShareIcon from "./ShareIcon";

export interface IconProps{
    size:string
    color:string
}
export const sizeMap:{[key:string]:string}={
    "sm":"size-4 mr-1 ",
    "md":"size-5 mr-2 ",
    "lg":"size-6 mr-3 "
}
export function iconType(iconT:string,props:IconProps){
    if(iconT==='plus')return (
        <PlusIcon {...props}></PlusIcon>
    )
    else if(iconT==='share')return (
        <ShareIcon {...props}></ShareIcon>
    )
}