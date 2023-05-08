
import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmMzZTQxYWExZjcxOTg1NzEwMjQ3MmRlNjY0M2U2MiIsInN1YiI6IjY0NTRlMDJmZDhmNDRlMGRhZjRiYzFmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zwHg-Q5h8hA33W55EHh2MjcN8VsrCI8LmOlk8RBoi5o"

const headers = {
  Authorization : "bearer " +TMDB_TOKEN,
}

export const fetchDataFromApi = async (url , params) =>{
  try{
    const {data}= await axios.get(BASE_URL + url , {
       headers , params
    })
    return data
  }catch(err){
    console.log(err)
    return err
  }
}



