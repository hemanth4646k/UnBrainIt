import Button from "./ui/Button"


export default function AddContentButton(){
    return(
        <div>
          <div className='m-5 lg:block hidden'>
            <Button onclick={()=>{console.log("button1 CLicked")}}
            size='lg' text='Add New' variant='primary' startIcon='plus'
            
            ></Button>
          </div>
          <div className='m-5 md:block lg:hidden hidden'>
            <Button onclick={()=>{console.log("button1 CLicked")}}
            size='md' text='Add New' variant='primary' startIcon='plus'
            
            ></Button>
          </div>
          <div className='m-5 md:hidden block'>
            <Button onclick={()=>{console.log("button1 CLicked")}}
            size='sm' text='Add New' variant='primary' startIcon='plus'
            
            ></Button>
          </div>

        </div>        
    )
}