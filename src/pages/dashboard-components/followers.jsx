import { ChevronRight } from "lucide-react";

export default function Followers({ followers =[] }) {
  return (
   <>
   <div>
    

   {
    followers.length>0?(
    followers.map((follower,item)=>(
        <h1></h1>
        
    ))): (
          <p className="text-gray-500 text-sm">No followers yet.</p>
   )}
   </div>
   </>
  );
}
