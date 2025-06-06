import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";


export function useContent(){
    const [contents,setContents]=useState<any[]>([]);
    const token=localStorage.getItem("token");
    function refresh(){
        axios.get(BACKEND_URL+"/api/v1/content",{
            headers:{
                token:token
            }
        }).then((response)=>{
            setContents(response.data.content);
        })

    }
    useEffect(()=>{
        refresh();
        const interval=setInterval(refresh,15000);
        return (()=>clearInterval(interval));
    },[])

    return {contents,refresh};
}