
import { useState } from 'react'
import CardCollection from '../components/CardCollection'
import CreateContentModal from '../components/CreateContentModal'
import { TopBar } from '../components/TopBar'
import { BottomBar } from '../components/ui/BottomBar'
import  NavSidebar  from '../components/ui/NavSideBar'
import { useContent } from '../hooks/useContents'

/*
  App name: UnBrainIt
  Tagline: Unload the brain and unleash the train
*/
function DashBoard() {

  const [openCreateContentModal,setOpenCreateContentModal]=useState(false);
  const {contents,refresh}=useContent();
    return (
      <div>
        <CreateContentModal openCreateContentModal={openCreateContentModal} refresh={refresh} setOpenCreateContentModal={setOpenCreateContentModal} ></CreateContentModal>
        <div className='h-screen w-screen flex '>
          <NavSidebar></NavSidebar>
          <div className=' flex-1 flex flex-col overflow-auto @container md:pl-[59px] lg:pl-0 '>
            <TopBar openCreateContentModal={openCreateContentModal} setOpenCreateContentModal={setOpenCreateContentModal}></TopBar>
            <CardCollection contents={contents}></CardCollection>
          </div>
        </div>
        <BottomBar></BottomBar>
      </div>
    )
}

export default DashBoard;
