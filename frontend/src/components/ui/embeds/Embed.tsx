import { LinkedInEmbed } from "./LinkedInEmbed";
import { XEmbed } from "./XEmbed";
import { YouTubeEmbed } from "./YoutubeEmbed";


export interface EmbedProps{
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
        <div className="flex justify-center w-5/6 overflow-auto">
            {site=="YouTube"&&<YouTubeEmbed link={props.link}/>}
            {site=="X"&&<XEmbed link={props.link}/>}
            {site=="LinkedIn"&&<LinkedInEmbed link={props.link}/>}
        </div>
    )
}

