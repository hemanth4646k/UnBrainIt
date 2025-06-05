
import ShareIcon from "../../icons/ShareIcon";
import { CardTitle } from "./CardTitle";
import Embed from "./embeds/Embed";
import { YouTubeEmbed } from "./embeds/YoutubeEmbed";

interface CardProps{
    title:string;
    link:string;
    tags:string[];
}

export function Card(props:CardProps){
    return (
        <div className="col-span-1 p-4 mb-4 grid justify-center items-center">
            <div className="w-[300px] h-[350px]  
            rounded-xl border border-gray-200 shadow-custom-gray ">
                <CardTitle title={props.title}></CardTitle>
                <div className=" h-1/2 flex justify-center bg-black">
                    <Embed link={props.link}/>
                </div>
            </div>
            
        </div>
    )
}