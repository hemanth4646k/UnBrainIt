interface SpinnerLoaderProps{
    text:string;
}
export default function SpinnerLoader(props:SpinnerLoaderProps){
    return (
        <div className="flex items-center">
            <div className="pr-4">{props.text}</div>
            <div className="animate-spin rounded-full h-5 w-5 border-3 border-t-transparent border-violet-950 mr-2"></div>
        </div>
    )
}