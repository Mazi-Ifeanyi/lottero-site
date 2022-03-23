import axios from 'axios';
import { useCallback, useState } from 'react';


//const controller = new AbortController();

const useAxios = () =>{
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const sendGetRequest = useCallback(async(url, callback) =>{
    try{
      setIsLoading(true);
      setError(null);
      const response = await axios.get(url, {headers:{'Content-Type' : 'application/json'}, timeout: 60000 });
      const status = response.status;
      const data = response.data;
       if(status === 200 || status === 304){
          callback(data);
         }
         if(status === 400){
            setError('An error occured');
            callback(data);
          }
         }catch(err){
           if(err.code === 'ECONNABORTED') setError('timeout');
           else setError('An error occured');
         }
          setIsLoading(false);
     },[]);


   return {
       sendGetRequest,
       isLoading,
       error,
   }
}

export default useAxios;


 //controller.abort();
            // if (err.code === 'ECONNABORTED') console.log('Timeout');
            // setError('An error occured');
            // console.log(controller.signal);