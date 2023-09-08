
import { useState } from "react";
import Spinner from "./Spinner";
import useGifs from "../hooks/useGifs";



const Tag = () =>{
 
  const [tag, setTag] = useState('');
  
  const {gif, loading, fetchData} = useGifs(tag);

  function clickHandler(){
    fetchData(tag);
    console.log('button clicked')
  }
  return(
    <div className="background2 w-1/2 flex flex-col items-center gap-y-10 rounded-lg mb-10">
        <h1 className="font-bold text-2xl underline uppercase my-3">Random {tag} Gif</h1>

        {
          loading ? (<Spinner/>) : (<img src={gif} width={450} height={450}/>)
        }

        <input
          value={tag}
          onChange={(e) => setTag(e.target.value)} 
          className="rounded-lg mb-[20px] text-2xl capitalize w-9/12
          border text-center py-2"/>
         

        <button className="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-lg mb-[20px] text-2xl font-bold uppercase w-9/12
        border text-red-100"
        onClick={() => fetchData(tag)}>
          Generate
        </button>
    </div>
  );

}

export default Tag