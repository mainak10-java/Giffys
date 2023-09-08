import Tag from "./components/Tag";
import Random from "./components/Random";

export default function App() {
  return(
    <div className="background w-full h-full flex flex-col items-center gap-y-10">
       <h1 className="bg-gradient-to-r from-sky-400 to-cyan-300 w-11/12 text-center uppercase text-3xl 
       rounded-lg mt-[40px] py-3 weight font-extrabold border"> Random Gif Generator</h1>

       <div className="w-full flex flex-col items-center gap-y-10">
          <Random/>
          <Tag/>
       </div>
    </div>
  );
}
