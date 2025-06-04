
export interface SideBarOpenCloseIconProps{
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
}
export function SideBarOpenIcon(props:SideBarOpenCloseIconProps){
    return (
        <div className="cursor-pointer w-[40px] rounded-xl" onClick={()=>{props.setOpen(x=>!x);}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>

        </div>

    )
}