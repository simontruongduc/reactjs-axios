import axios from "axios";
import * as Config from  "../Constants/config";

export default function callApi(endpoint,method = "GET",data = null,headers = null){
    return axios({
        method:method,
        url:`${Config.API_URL}/${endpoint}`,
        data:data,
        headers:headers
    }).catch(error =>{
        console.log(error);
    })
}
