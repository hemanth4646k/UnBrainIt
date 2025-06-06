import AddContentButton from "./AddContentButton";
import type { CreateContentModalProps } from "./CreateContentModal";


export function TopBar({openCreateContentModal,setOpenCreateContentModal}:CreateContentModalProps){
    return(
        <div className='sticky top-0 flex justify-between items-center w-full z-10 bg-violet-50/60 backdrop-blur shadow-md rounded-lg'>
            <div className='lg:text-3xl text-2xl p-5 ml-10'>
              <h1>All Notes</h1>
            </div>
            <div>
              <AddContentButton openCreateContentModal={openCreateContentModal} setOpenCreateContentModal={setOpenCreateContentModal}></AddContentButton>
            </div>
        </div>
    )
}