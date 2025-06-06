import ShareIcon from "../../icons/ShareIcon";

interface CardTitleProps{
    title:string;
}
export function CardTitle(props:CardTitleProps){
    return (
        <div className="flex justify-between items-center p-4 text-xl">
                <div className="flex justify-around items-center">
                    <ShareIcon size="lg" color="stroke-blue-200"/>
                    {props.title}

                </div>
                <div className="flex justify-center items-center">
                    <ShareIcon size="lg" color="stroke-blue-200"/>
                    <ShareIcon size="lg" color="stroke-blue-200"/>

                </div>

        </div>
    )
}