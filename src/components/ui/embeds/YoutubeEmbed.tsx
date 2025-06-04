

interface YouTubeEmbedProps{
    link:string;
}

export function YouTubeEmbed(props:YouTubeEmbedProps){
    return (
        <iframe className="w-5/6 rounded-md" 
                src={props.link} 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            
        </iframe>
    )
}