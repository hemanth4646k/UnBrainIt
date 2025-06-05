import { SidebarOption } from "./NavSideBar";


export function BottomBar(){
    return (
        <div className="flex justify-around fixed block md:hidden bottom-0 left-0 h-[60px] bg-slate-900 z-200 text-white w-screen">
            <SidebarOption name="Home"></SidebarOption>
            <SidebarOption name="Home"></SidebarOption>
            <SidebarOption name="Home"></SidebarOption>
            <SidebarOption name="Home"></SidebarOption>
        </div>
    )
}