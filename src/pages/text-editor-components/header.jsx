import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { motion, scale } from "framer-motion";
import { BsSave2Fill } from "react-icons/bs";


import { useLocation } from "react-router-dom"
import { useState ,useRef} from "react";
export default function Header(){

    const Location = useLocation();

    console.log(Location);

    const [save , setsave] = useState('Save')
    return(

    
        <>
        
        <div className=" flex  flex-col gap-2 w-full " style={{ marginTop: '0px', paddingTop: '0px' }}>
            
            <div className="flex flex-row gap-4 font-CabinetGrotesk-Bold items-center  ">

                <h1 className="text-[#333446]">DASHBOARD</h1> <IoIosArrowForward/>
                <h1 className="text-[#333446]">TEXT-EDITOR</h1>

            </div>

            
                
            <div className="font-CabinetGrotesk-Bold flex flex-row p-3 gap-4 items-center w-11/12 shadow-md hover:shadow-xl hover:cursor-pointer rounded-md bg-[#f8f8f8] duration:75">

                <IoIosArrowDroprightCircle className="h-7 w-7"/> <h1 className="text-3xl">MY STORY</h1>
                <div className="flex flex-2"></div>
                <motion.button whileHover={{}} whileTap={{scale:0.9}} onMouseEnter={()=>{setsave(<BsSave2Fill/>)}} onMouseLeave={()=>{setsave('Save')}} className="grid place-self-center px-4 shadow-xl bg-[#324f7b] text-white h-10 w-20 rounded-md items-center justify-center hover:cursor-pointer ">{save}</motion.button>
            </div>



            


        </div>

        
        
        </>
    )
}