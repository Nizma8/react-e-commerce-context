// for get products

import { CommonApi } from "./CommonApi"
import { baseUrl } from "./baseUrl"

export const getAllProductsApi = async()=>{
    return CommonApi("GET",`${baseUrl}`,"")
}

