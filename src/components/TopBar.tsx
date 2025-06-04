import AddContentButton from "./AddContentButton";


export function TopBar(){
    return(
        <div className='sticky top-0 flex justify-between items-center w-full z-10 bg-violet-50/60 backdrop-blur'>
            <div className='text-3xl p-5 ml-10'>
              <h1>All Notes</h1>
            </div>
            <div>
              <AddContentButton></AddContentButton>
            </div>
        </div>
    )
}