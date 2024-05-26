import React from "react"
import { Response } from "../interfaces/RicknMortyInterface";
import { Results } from "../interfaces/RicknMortyInterface";


export const useFetch = ()=>{
    const [data, setData] = React.useState<Results[]>([]);

    React.useEffect(() => {
      const fetchData = async()=>{
        try{
          const response = await fetch('https://rickandmortyapi.com/api/character')
          const data:Response = await response.json()
          setData(data.results)
          console.log(data)
  
        }catch(err:any){
          console.log(`Error: ${err}`)
        }
      }
      fetchData()
    },[]);

    return{
        data
    }
        
    
}