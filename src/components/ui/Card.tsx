import ShareIcon from "../../icons/ShareIcon";
import { CardTitle } from "./CardTitle";
import Embed from "react-embed";

interface CardProps{
    title:string;
    link:string;
    tags:string[];
}

export function Card(props:CardProps){
    return (
        <div className="w-[300px] h-[350px] m-5 
        rounded-xl border border-gray-200 shadow-custom-gray ">
            <CardTitle title={props.title}></CardTitle>
            <div className="w-5/6">

            <Embed url="https://twitter.com/username/status/807811447862468608"/>
            </div>
        </div>
    )
}