import { use} from "react";

import type { Itechnology } from "../type/type";

import TechnologyCard from "./technologyCard";
import YourStack from "./yourStack";


export interface TechnologiesProps {
   technologyDataPromise: Promise<Itechnology[]>
   added: Itechnology[];
  setAdded: React.Dispatch<React.SetStateAction<Itechnology[]>>;
}

const Technologies = ({ technologyDataPromise ,added,setAdded}: TechnologiesProps) => {
    const technologies = use(technologyDataPromise)
    
    console.log(technologies);

   
    return (
       <div >
        <div className="max-w-7xl mx-auto my-4" >
        <h1 className="text-3xl font-extrabold my-2 max-md:text-center ">Explore the <span className="brand-gradient-text "> Technologies </span></h1>
        <p className="max-md:text-center">Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className="grid grid-cols-[3fr_1fr] gap-4 max-md:grid-cols-1 max-md:p-10  max-w-7xl mx-auto my-7">
        <div className="grid grid-cols-3  gap-5 max-md:grid-cols-1  max-w-7xl mx-auto">
         {
            technologies.map((technology,index)=><TechnologyCard technology={technology} key={index} added={added} setAdded={setAdded} ></TechnologyCard>)
         }
         </div>
         <div>
           <YourStack added={added} setAdded={setAdded}  ></YourStack>
         </div>
        </div>
        </div>
    )
}

export default Technologies;