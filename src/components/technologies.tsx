import { use } from "react";
import type { Itechnology } from "../type/type";
import ExploreTechnologies from "./exploreTechnologies";


export interface TechnologiesProps {
   technologyDataPromise: Promise<Itechnology[]>
}

const Technologies = ({ technologyDataPromise }: TechnologiesProps) => {
    const technologies = use(technologyDataPromise)
    
    console.log(technologies);
    return (
        <>
        <ExploreTechnologies technologies={technologies}></ExploreTechnologies>
        </>
    )
}

export default Technologies;