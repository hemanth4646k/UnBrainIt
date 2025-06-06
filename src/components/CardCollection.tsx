import { Card } from "./ui/Card";

interface CardCollectionProps{
  contents:any[];
}
export default function CardCollection(props:CardCollectionProps){
    return (
      <div className=' w-full h-full overflow-auto grid bg-violet-50 @6xl:grid-cols-3 @2xl:grid-cols-2 pr-4 pl-4 '>
        
        {
          props.contents.map(({title,link})=><Card link={link} 
        title={title} tags={[]}></Card>)
        }
      </div>
    )
}