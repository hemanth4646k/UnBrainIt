import { Card } from "./ui/Card";


export default function CardCollection(){
    return (
      <div className=' w-full grid bg-violet-50 @6xl:grid-cols-3 @2xl:grid-cols-2 pr-4 pl-4 '>
        <Card link="https://www.youtube.com/embed/KxmYv2MfWdI?si=dn9FUWLZfR9cPqUs" 
        title="This is title" tags={[]}></Card>
        <Card link="https://www.youtube.com/watch?v=w4EZwfxmPYg" 
        title="This is title" tags={[]}></Card>
        <Card link="https://youtu.be/w4EZwfxmPYg?si=7g_O3jzuUWjbsi91" 
        title="This is title" tags={[]}></Card>
        <Card link="https://x.com/profsaritasidh/status/1930119922476019863" 
        title="X post" tags={[]}></Card>
        <Card link="https://www.youtube.com/embed/KxmYv2MfWdI?si=dn9FUWLZfR9cPqUs" 
        title="This is title" tags={[]}></Card>
        <Card link="https://www.youtube.com/watch?v=w4EZwfxmPYg" 
        title="This is title" tags={[]}></Card>
        <Card link="https://youtu.be/w4EZwfxmPYg?si=7g_O3jzuUWjbsi91" 
        title="This is title" tags={[]}></Card>
        <Card link="https://x.com/profsaritasidh/status/1930119922476019863" 
        title="X post" tags={[]}></Card>
        <Card link="https://www.youtube.com/embed/KxmYv2MfWdI?si=dn9FUWLZfR9cPqUs" 
        title="This is title" tags={[]}></Card>
        <Card link="https://www.youtube.com/watch?v=w4EZwfxmPYg" 
        title="This is title" tags={[]}></Card>
        <Card link="https://youtu.be/w4EZwfxmPYg?si=7g_O3jzuUWjbsi91" 
        title="This is title" tags={[]}></Card>
        <Card link="https://x.com/profsaritasidh/status/1930119922476019863" 
        title="X post" tags={[]}></Card>
      </div>
    )
}