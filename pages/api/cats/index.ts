import type { NextApiRequest, NextApiResponse } from 'next'
import CatCard from '../../../interfaces/CatCard';

type CatObject = {
  id : string,
  url : string,
  width : Number,
  height : Number,
  breeds : Array<Object>,
  favourite : Object
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<CatCard>>
){
    const {limit, order, page} = req.query;
    const BASE_URL = "https://api.thecatapi.com/v1/images/search"
    const URL = BASE_URL + `?limit=${limit}&order=${order}&page=${page}`
    // console.log(URL)
    const response = await fetch(URL, {
        headers : {
            'x-api-key' :  process.env.CATAPI_KEY! 
        }
    })
    const data = await response.json()
    // console.log(data)
    const requiredData = data.map((cat : CatObject) => {
      return {
        id : cat.id,
        url : cat.url
      }
    })
    res.status(200).json(requiredData)
}
