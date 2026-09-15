import type { Itechnology } from "../type/type";

export interface YourStackProps {
   
    added :Itechnology[]
   

}

const YourStack = ({added}:YourStackProps) => {
    console.log(added);
    
    return (
        <>
        <div className="border-gray-500 rounded-2xl border p-8">
        <h1 className="font-bold text-2xl">Your Stack</h1>
        {added.length ===0 ? <div >No technologies selected yet</div> : <div className="text-gray-500"> {added.length} Technology Selected</div> }
        
        <div className="border rounded-2xl p-12 border-dashed my-2">
            {added.length === 0? <div className=" text-gray-500"> Your stack is empty</div>: <div>{added.map(technology=> <h1>{technology.name}</h1>)}</div>}
        </div>
        </div>
        </>
    )
}

export default YourStack;