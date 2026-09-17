import { toast } from "react-toastify";
import type { Itechnology } from "../type/type";

export interface YourStackProps {

    added: Itechnology[]
     setAdded: React.Dispatch<React.SetStateAction<Itechnology[]>>;
     


}

const YourStack = ({ added ,setAdded }: YourStackProps) => {
    console.log(added);

    function handleRemoveButton (name:string){
        setAdded(prev => prev.filter(item => item.name !== name ))
        toast.error(`${name} is Removed`)
    }
    function handleRemoveAllButton (){
        setAdded([])
        toast.error(`All items removed`)
    }

    return (
        <>
            <div className="border border-slate-200 rounded-3xl shadow-sm p-4">
                <h1 className="font-bold text-2xl">Your Stack</h1>
                {added.length === 0 ? <div  >No technologies selected yet</div> : <div className="text-gray-500"> {added.length} Technology Selected</div>}

                <div className="border  border-slate-200   rounded-2xl p-6 border-dashed my-2">
                    {added.length === 0 ? <div className=" text-gray-500"> Your stack is empty</div> :
                        <div className=" p-2">{added.map(technology => (
                            <div
                                key={technology.name}
                                className="flex items-center justify-between border border-slate-200 rounded-xl px-4 py-3 mb-2 bg-white" >

                                <div className="flex items-center gap-3">
                                    <img
                                        src={technology.image}
                                        alt={technology.name}
                                        className="w-10 h-10 object-contain"
                                    />

                                    <div>
                                        <h3 className="font-bold text-slate-800">
                                            {technology.name}
                                        </h3>

                                        <p className="text-xs text-slate-400">
                                            {technology.category}
                                        </p>
                                    </div>
                                </div>


                                <button
                                    className="text-3xl font-light text-slate-400 hover:text-red-500 transition"
                                    onClick={()=>handleRemoveButton(technology.name)}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                        <button className="btn btn-outline btn-error w-full mt-8 rounded-xl" onClick={handleRemoveAllButton} >Remove All </button>
                        
                        </div>}
                </div>
            </div>
        </>
    )
}

export default YourStack;