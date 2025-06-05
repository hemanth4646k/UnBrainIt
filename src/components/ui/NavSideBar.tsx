import { useState } from "react";
import { SideBarOpenIcon } from "../../icons/SideBarOpen";
import { SideBarClose } from "../../icons/SideBarClose";
import { HomeIcon } from "../../icons/HomeIcon";
import BrainIcon from "../../icons/BrainIcon";

export default function NavSideBar() {
    const [open,setOpen]=useState(true);
    
  return (
    
    <div className={`p-2 hidden md:block md:fixed lg:relative z-100 md:h-full md:transition-all bg-violet-200 md:duration-500 md:ease-in-out md:delay-200 ${open? "lg:w-[250px] md:w-[59px]":"lg:w-[59px] md:w-[190px] "}`}>
        {/* <div className={``}> */}

          <div className="flex bg-violet-950 rounded-xl max-h-[48px] justify-between flex-row-reverse p-1"  >
              <div className="lg:block hidden flex justify-center items-center w-[59px]">
              {open?<SideBarClose color="stroke-cyan-50" setOpen={setOpen}/>:<SideBarOpenIcon color="stroke-white" setOpen={setOpen}/>}
              </div>
              <div className="lg:hidden block flex justify-center items-center w-[59px]">
              {open?<SideBarOpenIcon color="stroke-white" setOpen={setOpen}/>:<SideBarClose color="stroke-white" setOpen={setOpen}/>}
              </div>
              <div className={`w-full flex p-2 transition-all items-center ${open?"lg:opacity-100 lg:scale-100 lg:delay-700 scale-0 opacity-0":"lg:opacity-0 lg:scale-0 lg:delay-0 delay-700 scale-75 opacity-100"}  `} >
                  <BrainIcon size="md" color="yellow"></BrainIcon>
              </div>

          </div>
          <SidebarOption open={open} name="Home"/>
          <SidebarOption open={open} name="Skills"/>
          <SidebarOption open={open} name="Projects"/>
          <SidebarOption open={open} name="Experience"/>
          <SidebarOption open={open} name="Contact"/>
        {/* </div> */}
      </div>
    
  );
}
interface SidebarOptionProps{
    open?:boolean;
    name:string;
}
export function SidebarOption(props:SidebarOptionProps) {
  return (
    <div className="hover:bg-violet-500 flex bg-violet-300 rounded-xl mb-2 mt-2 md:flex-row-reverse flex-col items-center md:w-full w-[60px] justify-center md:justify-between ${open?m-2:m-2}">
      <div className="flex justify-center items-center w-[59px]">
      <HomeIcon />

      </div>
        <div className={`${props.open?"lg:w-full md:w-0":"lg:w-0 md:w-full"} md:grid md:grid-cols-12`}>
        <div className={` text-xs md:text-lg md:p-2 md:col-start-3 md:col-span-3 transition-all ${props.open?"lg:scale-100 lg:delay-700 lg:opacity-100 md:scale-0 md:opacity-0":"lg:scale-0 lg:opacity-0 lg:delay-0 md:scale-100 md:opacity-100 md:delay-700"} `}>{props.name}</div>

        </div>
    </div>
  );
}
