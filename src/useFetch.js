
import { useState,useEffect } from "react";
const useFetch =(url) =>{
    const [data,setdata] = useState(null);
    const [ispending,setispending] = useState(true);
    const [errors,iserror] = useState(null);
    useEffect(() =>{
        const abortCont = new AbortController();
        fetch(url, {signal:abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch');
                }
                return res.json();
            })
            .then(data =>{
                setdata(data);
                setispending(false);
                iserror(null);
            })
            .catch(err =>{
                if(err.name ==='AbortError'){
                    console.log('fetch aborted');
                }else{
                    setispending(false);
                    iserror(err.message);
                }
            });
    },[url]);
return { data,ispending,errors}
}

export default useFetch;