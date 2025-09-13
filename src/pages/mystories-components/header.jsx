import { FaCircleUser } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { useUser } from "../usercontext";
import { motion, scale } from "framer-motion";
import { AiTwotonePlusCircle } from "react-icons/ai";
import { CreateStoryDocument } from "../../database-functions/firestoreutil";
import { Outlet, useNavigate } from "react-router-dom";
export default function Header() {
    const { userdata } = useUser();
    const navigate = useNavigate();

    console.log(userdata)
    const createStory = async ()=>{    
        console.log(userdata)
        await CreateStoryDocument(userdata);
        navigate("/newstory");
        
    }
    
    return (
        <>
            <div className="flex  items-center">
                <div className="flex-1">
                    <p className="font-CabinetGrotesk-Bold text-4xl p-5">My Stories</p>
                </div>
                <div className="flex-1 flex flex-row ">
                    <div className="flex flex-1 gap-2 items-center">
                        <IoMdSearch className="h-7 w-7"/>
                        <input type='text' placeholder="Search your stories" className="font-CabinetGrotesk-Bold h-11/12 w-full p-4 rounded-xl bg-white border-1"  />
                    </div>
                    <div className="flex flex-1 justify-center items-center">
                        <p className="text-center font-CabinetGrotesk-Bold text-xl ">{userdata.name}</p>
                        <FaCircleUser className="h-10 w-10 mx-4 "/>

                    </div>
                </div>
                
            </div>
            <div>

               {
               
               [{name:"Most Recent"},{name:"Most Liked"},{name:"Published"},{name:"Draft"},{name:"Archive"}].map((item,i)=>(
                    
                    <motion.button key={i} whileTap={{scale : 0.7}}  className="mx-5  bg-white rounded-md  text-sm h-10 w-23 mt-5 font-CabinetGrotesk-Bold hover:border-2 shadow-lg hover:cursor-pointer ">{item.name}</motion.button>
               ))
    }
            </div>
            
            {/* //create story button */}
            <div>
                <motion.button  onClick={createStory} whileTap={{scale : 0.7}}  className="mx-5 mt-7 bg-black rounded-md  text-white text-sm h-13 w-30 justify-items-end items-center justify-center font-CabinetGrotesk-Bold hover:border-2 shadow-lg hover:cursor-pointer border-none flex ">Start Writing <Outlet></Outlet>{<AiTwotonePlusCircle className="h-5 w-5 ml-2"/>}</motion.button>

            </div>
        </>
    );
}