

import type { SideBarOpenCloseIconProps } from "./SideBarOpen";

export function SideBarClose(props:SideBarOpenCloseIconProps){
    return (
        <div className="cursor-pointer size-full flex justify-center items-center rounded-xl" onClick={()=>{props.setOpen(x=>!x);}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-8 ${props.color}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
            </svg>


        </div>

    )
}