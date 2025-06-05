
import './App.css'
import AddContentButton from './components/AddContentButton'
import CardCollection from './components/CardCollection'
import { TopBar } from './components/TopBar'
import Button from './components/ui/Button'
import { Card } from './components/ui/Card'
import  NavSidebar  from './components/ui/NavSideBar'
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
    return (
      <div className='h-screen w-screen flex '>
        <NavSidebar></NavSidebar>
        <div className='flex-1 overflow-auto @container md:pl-[59px] lg:pl-0 '>
          <TopBar></TopBar>
          <CardCollection></CardCollection>
        </div>

      </div>
    )
}

export default App
