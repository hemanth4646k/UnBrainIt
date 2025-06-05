import Button from "./ui/Button"
import type { CreateContentModalProps } from "./CreateContentModal";


export default function AddContentButton({openCreateContentModal,setOpenCreateContentModal}:CreateContentModalProps){
    return(
        <div>
          <div className='m-5 lg:block hidden'>
            <Button onclick={()=>{setOpenCreateContentModal(true)}}
            size='lg' text='Add New' variant='primary' startIcon='plus'
            
            ></Button>
          </div>
          <div className='m-5 md:block lg:hidden hidden'>
            <Button onclick={()=>{setOpenCreateContentModal(true)}}
            size='md' text='Add New' variant='primary' startIcon='plus'
            
            ></Button>
          </div>
          <div className='m-5 md:hidden block'>
            <Button onclick={()=>{setOpenCreateContentModal(true)}}
            size='sm' text='Add New' variant='primary' startIcon='plus'
            
            ></Button>
          </div>

        </div>        
    )
}