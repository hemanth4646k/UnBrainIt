import Button from "./ui/Button"


export default function AddContentButton(){
    return(
                
      <div className='m-5'>
        <Button onclick={()=>{console.log("button1 CLicked")}}
        size='lg' text='Add New' variant='primary' startIcon='plus'
        
        ></Button>
        </div>
    )
}