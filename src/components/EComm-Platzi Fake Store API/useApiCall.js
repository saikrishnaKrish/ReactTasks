import { useEffect, useState } from "react"

const useApiCall = (initialUrl,initialData=[])=>{

    const [fetchData,setFetchData]=useState({
        data:initialData,
        error:false,
        isLoading:false
    })

    const fetchApi=async(url)=>{
        const data = await fetch(url);
        const result = await data.json();
        
      setFetchData((prevData)=>({
            ...prevData,data:result,
            error:false,
            isLoading:false
        }))
    }

    useEffect(()=>{
        fetchApi(initialUrl)
    },[initialUrl])

    return {
        fetchData
    }
}

export default useApiCall;