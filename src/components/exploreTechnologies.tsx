import type { Itechnology } from "../type/type";
import TechnologyCard from "./technologyCard";

export interface ExploreTechnologiesProps {
    technologies:Itechnology[]
}

const ExploreTechnologies = ({ technologies}: ExploreTechnologiesProps) => {
    
    return (
        <>
        <div className="grid grid-cols-3 gap-5 container mx-auto">
         {
            technologies.map((technology,index)=><TechnologyCard technology={technology} key={index} ></TechnologyCard>)
         }
         </div>
        </>
    )
}

export default ExploreTechnologies;