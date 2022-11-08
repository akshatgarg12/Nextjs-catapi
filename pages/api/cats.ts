import type { NextApiRequest, NextApiResponse } from 'next'

type Cats = {
  id : string,
  url : string,
  width : Number,
  height : Number,
  breeds : Array<Object>,
  favourite : Object
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Cats>>
){
    const {limit, order, page} = req.query;
    const BASE_URL = "https://api.thecatapi.com/v1/images/search"
    const URL = BASE_URL + `?limit=${limit}&order=${order}&page=${page}`
    console.log(URL)
    const response = await fetch(URL, {
        headers : {
            'x-api-key' : 'live_X8Em0cIuXff4NczQgRTWqS6bMCOLFP7kiHweV8mBcqpgSN96SNrICMzVgZy7WVm4' 
        }
    })
    const data = await response.json()
    res.status(200).json(data)
}
