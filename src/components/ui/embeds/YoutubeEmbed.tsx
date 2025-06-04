
interface YouTubeEmbedProps{
    link:string;
}
export function getYouTubeEmbedUrl(inputUrl: string): string | null {
  try {
    const url = new URL(inputUrl);
    let videoId: string | null = null;

    if (url.hostname === "youtu.be") {
      // Short URL: youtu.be/VIDEO_ID
      videoId = url.pathname.slice(1);
    } else if (url.pathname.startsWith("/embed/")) {
      // Already embed link
      videoId = url.pathname.split("/embed/")[1].split(/[?/]/)[0];
    } else if (url.pathname.startsWith("/watch")) {
      // Standard link: youtube.com/watch?v=VIDEO_ID
      videoId = url.searchParams.get("v");
    } else if (url.pathname.startsWith("/shorts/")) {
      // Shorts link: youtube.com/shorts/VIDEO_ID
      videoId = url.pathname.split("/shorts/")[1].split(/[?/]/)[0];
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
}


export function YouTubeEmbed(props:YouTubeEmbedProps){

    const embeddedLink=getYouTubeEmbedUrl(props.link);
    if(embeddedLink===null){
        return (
            <div>Link: {props.link}</div>
        )
    }
    return (
        <iframe className="w-5/6 rounded-md" 
                src={embeddedLink} 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            
        </iframe>
    )
}