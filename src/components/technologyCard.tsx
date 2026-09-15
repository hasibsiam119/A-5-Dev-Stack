import { toast } from "react-toastify";
import type { Itechnology } from "../type/type";

export interface TechnologyCardProps {
    technology : Itechnology
   added: Itechnology[];
  setAdded: React.Dispatch<React.SetStateAction<Itechnology[]>>;
    
}

const TechnologyCard = ({ technology ,added,setAdded }: TechnologyCardProps) => {
   
  const handleButton =()=>{
  const alreadyAdded = added.find(r=> r.name === technology.name) 
  if(alreadyAdded){
    toast.error("Already added")
    return
  }
       setAdded(prev=>[...prev,technology])
       toast.success(`${technology.name} is selected`)
    
   
  }

  const {
    name,
    image,
    badge,
    description,
    category,
    level,
    rating,
  } = technology;

  return (
    
    <div className="card w-full max-w-sm bg-base-100 border border-slate-200 rounded-3xl shadow-sm">
      <div className="card-body p-6">

        {/* Top section */}
        <div className="flex items-start justify-between">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 object-contain"
          />

          <span className="badge badge-info badge-soft px-4 py-3 rounded-full font-medium">
            {badge}
          </span>
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-slate-900 mt-4">
          {name}
        </h2>

        {/* Description */}
        <p className="text-slate-500 text-base leading-6 min-h-20">
          {description}
        </p>

        {/* Divider */}
        <div className="border-t border-slate-100 my-2"></div>

        {/* Category + Level + Rating */}
        <div className="flex items-center justify-between">

          <span className="badge badge-ghost bg-slate-100 text-slate-600 border-0">
            {category}
          </span>

          <span className="text-slate-500 font-medium text-sm">
            {level}
          </span>

          <span className="flex items-center gap-1 text-slate-600 font-medium">
            <span className="text-yellow-400">★</span>
            {rating}
          </span>

        </div>

        {/* Button */}
        <button onClick={handleButton}  className="btn bg-slate-950 hover:bg-slate-800 text-white border-0 rounded-lg w-full mt-3">
          Add to Stack
        </button>

      </div>
    </div>
    
  );

}

export default TechnologyCard;