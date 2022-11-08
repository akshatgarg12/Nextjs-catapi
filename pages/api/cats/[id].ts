import type { NextApiRequest, NextApiResponse } from 'next'
import { isArray } from 'util'

type Cat = {
  id : string,
  url : string,
  name ?: string,
  description ?: string,
  origin ?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Cat>
){
    const {id : catId} = req.query
    const BASE_URL = "https://api.thecatapi.com/v1/images"
    const URL = BASE_URL + `/${catId}`
    console.log(URL)
    const response = await fetch(URL, {
        headers : {
            'x-api-key' : 'live_X8Em0cIuXff4NczQgRTWqS6bMCOLFP7kiHweV8mBcqpgSN96SNrICMzVgZy7WVm4' 
        }
    })
    const data = await response.json()
    console.log(data)

    const {id, url, breeds} = data
    if(Array.isArray(breeds) && breeds.length > 0){
        return res.status(200).json({
            id :id,
            url : url,
            name : breeds[0].name,
            description :breeds[0].description,
            origin : breeds[0].origin
        })
    }else{
        return res.status(200).json({
            id :id,
            url : url,
            name : 'N/A',
            description :'N/A',
            origin : 'N/A'
        })
    }
   
}