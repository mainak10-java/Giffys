
import { useState } from "react";
import Spinner from "./Spinner";
import useGifs from "../hooks/useGifs";



const Random = () =>{
  const {gif, loading, fetchData}= useGifs();

  
  return(
    <div className="background1 w-1/2 flex flex-col items-center gap-y-10 rounded-lg">
        <h1 className="font-bold text-2xl underline uppercase my-3">Random Gif</h1>

        {
          loading ? (<Spinner/>) : (<img src={gif}/>)
        }
       

        <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg mb-[20px] text-2xl font-bold uppercase w-9/12
        border text-red-100"
        onClick={() => fetchData()}>
          Generate
        </button>
    </div>
  );

}

export default Random