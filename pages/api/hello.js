import {query} from "../../lib/db"
export default async function handler(req ,res ){
   
const data = await query('SELECT * FROM dd ');//it works very well
res.status(200).json(data)              
}