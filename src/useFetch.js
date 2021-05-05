import { useEffect, useState } from "react";

const useFetch = (url) => {
    
    const [posts,setposts] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [ error, setError] = useState(null);
    
    console.log("in UseFetch Hook!");


    useEffect( () => {
    
        const abort = new AbortController();
        
        setTimeout(()=> {
            fetch(url, { })
                    .then(
                        res => {
                            if(!res.ok){
                                throw Error('Could not fetch data from Server');
                            }else{
                                return res.json();
                            }
                        })
                    .then( data => {
                        setposts(data);
                        setIsPending(false);
                        setError(null);
                    })
                    .catch(err => {
                        console.log(err);
                        if(err.name === 'AbortError'){
                            console.log('Aborting data load from Hook')
                            setError(null);
                        }else{
                            setError(err);
                        }
                        setIsPending(false);
                    })
        },1500)

    return () => abort.abort();
    } ,[url]);
    return { posts, isPending, error};
}
 
export default useFetch;