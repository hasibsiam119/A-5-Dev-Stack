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
        <div className="grid grid-cols-[3fr_1fr] gap-4 container mx-auto">
        <div className="grid grid-cols-3 gap-5 container mx-auto">
         {
            technologies.map((technology,index)=><TechnologyCard technology={technology} key={index} added={added} setAdded={setAdded} ></TechnologyCard>)
         }
         </div>
         <div>
           <YourStack added={added} ></YourStack>
         </div>
        </div>
    )
}

export default Technologies;