import type { EmbedProps } from "./Embed";


function getLinkedInEmbedLink(normalLink:string):string {
  const match = normalLink.match(/urn:li:share:(\d+)/);
  if (match) {
    const shareId = match[1];
    return `https://www.linkedin.com/embed/feed/update/urn:li:share:${shareId}`;
  } else {
    throw new Error("Invalid LinkedIn post link");
  }
}


export function LinkedInEmbed(props:EmbedProps){
    const embedLink=getLinkedInEmbedLink("https://www.linkedin.com/feed/update/urn:li:share:7334944262779723776");
    // const embedLink=getLinkedInEmbedLink(props.link);
    return <div>
{/* <iframe src={"https://www.linkedin.com/embed/feed/update/urn:li:share:7334944262779723776"} height="50" width="50" frameBorder="0" allowFullScreen={true} title="Embedded post"></iframe> */}
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7322563857183313921?collapsed=1" height="654" width="504" frameBorder="0" allowFullScreen={true} title="Embedded post"></iframe>
<script src="https://platform.linkedin.com/in.js" type="text/javascript">lang: en_US</script>
    </div>
}