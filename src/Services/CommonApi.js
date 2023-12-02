import axios from "axios";


export const CommonApi =async(method, url, data)=>{
    let reqConfig = {
       method,
       url,
       data,
       Headers:{
        "content-type": "application/json",

       }}

       return await axios(reqConfig).then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });

    
}