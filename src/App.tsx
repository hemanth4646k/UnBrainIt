
import Embed from 'react-embed'
import './App.css'
import Button from './components/ui/Button'
import { Card } from './components/ui/Card'
import BrainIcon from './icons/BrainIcon'

/*
  App name: UnBrainIt
  Tagline: Unload the brain and unleash the train
*/
function App() {

//   return (
//     <div className='h-screen flex justify-center items-center'>
//       <BrainIcon></BrainIcon>
//       <div className='m-5'>
//         <Button onclick={()=>{console.log("button2 CLicked")}}
//         size='lg' text='Share' variant='secondary' startIcon="share"
        
//         ></Button>
//       </div>
//       <div className='m-5'>
//         <Button onclick={()=>{console.log("button1 CLicked")}}
//         size='lg' text='Add New' variant='primary' startIcon='plus'
        
//         ></Button>
//       </div>
//     </div>

//   )
    return(
      <div className='h-screen w-full flex bg-violet-50'>
        {/* <NavSidebar></NavSidebar> */}
        <Card link="https://www.youtube.com/watch/KxmYv2MfWdI?si=dn9FUWLZfR9cPqUs" 
        title="This is title" tags={[]}></Card>
        <Card link="https://www.youtube.com/watch?v=w4EZwfxmPYg" 
        title="This is title" tags={[]}></Card>
        <Card link="https://youtu.be/w4EZwfxmPYg?si=7g_O3jzuUWjbsi91" 
        title="This is title" tags={[]}></Card>
        <Card link="https://twitter.com/username/status/807811447862468608" 
        title="X post" tags={[]}></Card>
        {/* <Embed url='https://youtu.be/w4EZwfxmPYg?si=7g_O3jzuUWjbsi91'></Embed> */}
      </div>
    )
}

export default App
