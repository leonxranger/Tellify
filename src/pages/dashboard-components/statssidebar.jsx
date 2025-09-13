

import { IoMdNotificationsOutline   } from "react-icons/io";
import { FaRegUser , FaUsers ,FaChevronRight  } from "react-icons/fa";

import { BsFilePost } from "react-icons/bs";
import { PiHandsClappingFill } from "react-icons/pi";
import { motion } from "motion/react"
const count = 69;

export default function Statsidebar({userdata}){
    return(
        <>
        <div className="bg-[#f8f8f8] flex-3">
        
        <div className="flex flex-col h-full gap-4">        

            <div className="flex w-full flex-1 bg-[#f8f8f8] items-center justify-end px-4"><IoMdNotificationsOutline className="h-7 w-7 mx-5"></IoMdNotificationsOutline ><h1 className="font-CabinetGrotesk-Bold mr-5">En</h1>{userdata?<h1 className="font-CabinetGrotesk-Bold text-md mr-2 mb-4">{userdata.name}</h1>:<h1>loading</h1>}<FaRegUser className="bg-[#DDDDDD] h-10 w-12 rounded-4xl "></FaRegUser></div>

            <div className="flex w-full  flex-col gap-4 flex-5 bg-[#f8f8f8]  items-center justify-center p-4">
                {[{icon: BsFilePost ,heading:"Articles Posted",counts:count},{icon: PiHandsClappingFill ,heading:"Claps this week",counts:count},{icon: FaUsers ,heading:"New Followers this week",counts:count}


                ].map((item,i)=>(
                    <motion.div key={i}  whileHover={{scale:1.09}} whileTap={{scale : 1}} className="hover:cursor-pointer flex  rounded-xl bg-white shadow-xl w-11/12 flex-3 flex-row  px-3 items-center ">
                        <div    className="flex h-full items-center">
                         <item.icon className="h-8 w-8 bg-white rounded-md p-1"/>
                         </div>


                         <div className="flex flex-col">

                            <h1 className="font-CabinetGrotesk-Bold mx-2  text- ">
                                {item.heading}
                            </h1>
                            
                            <h2 className="font-CabinetGrotesk-Bold mx-2  text-xl">{item.counts}</h2>

                         </div>
                          
                         <div className="flex w-full flex-1 justify-end">

                            <FaChevronRight className="bg-white h-6 w-6 rounded-md"></FaChevronRight>

                        </div>



                    </motion.div>
                ))}
            </div>

            <div className="flex w-full flex-5 bg-[#f8f8f8] ">
                <h1>Followers</h1>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                View All
                </a>
                

            </div>
                
        </div>
                
        </div>

        </>
    )
}