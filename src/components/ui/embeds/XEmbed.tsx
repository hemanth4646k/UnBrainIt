

interface XEmbedProps{
    link:string;
}
export function XEmbed(props:XEmbedProps){
    return (
        <blockquote className="twitter-tweet">
            <a href={props.link}></a>    
        </blockquote>
    )
}