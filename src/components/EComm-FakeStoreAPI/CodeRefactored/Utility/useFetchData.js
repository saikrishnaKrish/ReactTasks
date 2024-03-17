
import React, { useEffect, useState } from 'react'

const useFetchData = (initialUrl,initialData) => {

    const [data,setData]=useState(initialData);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);



        // eslint-disable-next-line no-inner-declarations
        async function fetchData(){ 
            setIsLoading(true);
            try {
                const response = await fetch(initialUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
                // console.log(responseData)
                setData(responseData.data || responseData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        useEffect(()=>{
            fetchData()
        },[])    


    return {
        isLoading,data,error
    }
}

export default useFetchData