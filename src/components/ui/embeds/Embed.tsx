import { XEmbed } from "./XEmbed";
import { YouTubeEmbed } from "./YoutubeEmbed";


interface EmbedProps{
    link:string;
}
function detectWebsite(url: string): string {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname;

    if (hostname.includes('youtube.com') || hostname.includes('youtu.be')) {
      return 'YouTube';
    } else if (hostname.includes('twitter.com') || hostname.includes('x.com')) {
      return 'X';
    } else if (hostname.includes('instagram.com')) {
      return 'Instagram';
    } else if (hostname.includes('facebook.com')) {
      return 'Facebook';
    } else if (hostname.includes('linkedin.com')) {
      return 'LinkedIn';
    } else {
      return 'Unknown';
    }
  } catch (e) {
    return 'Invalid URL';
  }
}

export default function Embed(props:EmbedProps){
    const site=detectWebsite(props.link);
    return (
        <div className="flex justify-center">
            {site=="YouTube"&&<YouTubeEmbed link={props.link.replace("watch","embed")}/>}
            {site=="X"&&<XEmbed link={props.link}/>}
        </div>
    )
}