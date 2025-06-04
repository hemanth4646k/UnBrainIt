import { useEffect, useState } from "react";
import { SideBarOpenIcon } from "../../icons/SideBarOpen";
import { SideBarClose } from "../../icons/SideBarClose";
import { HomeIcon } from "../../icons/HomeIcon";

export default function NavSideBar() {
    const [open,setOpen]=useState(true);
    
  return (
    
      <div className={`p-2  transition-all bg-slate-900 duration-500 ease-in-out delay-200 ${open? "lg:w-3/13 w-[59px]":"lg:w-[59px] w-[190px] "}`}>
        <div className="flex bg-red-200 rounded-xl max-h-[48px] justify-between flex-row-reverse p-1"  >
            {open?<SideBarClose  setOpen={setOpen}/>:<SideBarOpenIcon setOpen={setOpen}/>}
            <div className={`w-full flex p-2 transition-all items-center ${open?"lg:opacity-100 lg:scale-100 lg:delay-700 scale-0 opacity-0":"lg:opacity-0 lg:scale-0 lg:delay-0 delay-700 scale-75 opacity-100"}  `} >
                Toggle Sidebar
            </div>

        </div>
        <SidebarOption open={open} name="Home"/>
        <SidebarOption open={open} name="Skills"/>
        <SidebarOption open={open} name="Projects"/>
        <SidebarOption open={open} name="Experience"/>
        <SidebarOption open={open} name="Contact"/>
      </div>
    
  );
}
interface SidebarOptionProps{
    open:boolean;
    name:string;
}
function SidebarOption(props:SidebarOptionProps) {
  return (
    <div className="hover:bg-red-300 flex bg-red-200 rounded-xl mb-2 mt-2 flex-row-reverse items-center w-full justify-between ${open?m-2:m-2}">
      <HomeIcon />
        <div className="w-full grid grid-cols-12">
        <div className={`p-2 col-start-3 col-span-3 transition-all ${props.open?"lg:scale-100 lg:delay-700 lg:opacity-100 scale-0 opacity-0":"lg:scale-0 lg:opacity-0 lg:delay-0 scale-100 opacity-100 delay-700"} `}>{props.name}</div>

        </div>
    </div>
  );
}
