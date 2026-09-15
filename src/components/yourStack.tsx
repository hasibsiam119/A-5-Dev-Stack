import type { Itechnology } from "../type/type";

export interface YourStackProps {
    technology:Itechnology
    added :Itechnology[]
   

}

const YourStack = ({}) => {
    
    return (
        <>
        <div className="border-gray-500 rounded-2xl border p-8">
        <h1 className="font-bold text-2xl">Your Stack</h1>
        <div className="text-gray-500">No technologies selected yet</div>
        <div className="border rounded-2xl p-12 border-dashed my-2 text-gray-500">Your stack is empty</div>
        </div>
        </>
    )
}

export default YourStack;