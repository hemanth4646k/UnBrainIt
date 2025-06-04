

interface XEmbedProps{
    link:string;
}
export function convertXtoTwitter(urlString: string): string | null {
  try {
    const url = new URL(urlString);

    // If already twitter.com, return as-is
    if (url.hostname === 'twitter.com' || url.hostname.endsWith('.twitter.com')) {
      return url.toString();
    }

    // If it's x.com or any subdomain of x.com, convert to twitter.com
    if (url.hostname === 'x.com' || url.hostname.endsWith('.x.com')) {
      url.hostname = 'twitter.com';
      return url.toString();
    }

    // If it's neither, return the original (or null if you prefer strict check)
    return urlString;
  } catch {
    return null;
  }
}

export function XEmbed(props:XEmbedProps){
    const twitterLink=convertXtoTwitter(props.link);
    if(twitterLink===null)return (
        <div>
            Link:{props.link}
        </div>
    )
    return (
        <div>
            <blockquote className="twitter-tweet">
                <a href={twitterLink}></a>    
            </blockquote>
        </div>
    )
}