
import {Search} from 'lucide-react'
import cartoon from '../../assets/dashboard/main/green-man-drawing-cartoon.png'
import { PiHandsClappingFill } from "react-icons/pi";
import { motion } from "motion/react"
import { useEffect } from 'react';
import { useUser } from '../usercontext';
export default function Main(){
    const {userdata} = useUser();
    



    
   
    return(
    // original div
    <div className="bg-white flex  flex-9 p-3 justify-center flex-col h-screen gap-4 overflow-hidden" >
        <div className='relative flex justify-center '>
            <input type="text" className=' py-3 pl-4 w-11/12 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#324f7b] bg-[#DDDDDD]' placeholder='Search..'></input>
            <Search className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 " size={48} fill="white"></Search>
        </div>
        <div className='flex w-full flex-1 bg-[#F8F8F8] rounded-xl'>
            <div className='flex flex-row'>

                <div className='flex flex-2 flex-col'>
                        {userdata?<h1 className='font-CabinetGrotesk-Bold text-4xl p-4'>Hi {userdata.name}</h1>:<h1>doesnotexist</h1>} 
                        <p className='font-CabinetGrotesk-Bold text-xl p-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat laudantium aspernatur quidem rem quod aliquid architecto, quibusdam veniam recusandae sapiente reiciendis error officia facere id, modi cum numquam eveniet ducimus?</p>
                        <button className='mx-4 rounded-md w-1/5 bg-black font-CabinetGrotesk-Bold text-white text-md p-3'>View Details</button>
                
                </div>
                <div className='flex flex-1'>
                        <img src={cartoon} className=' '></img>
                </div>

            </div>
        
        </div>
        <div className='flex w-full flex-2 bg-[#F8F8F8] flex-col p-3 rounded-xl'>
            
            <div className='font-CabinetGrotesk-Bold text-2xl p-2 '><h1>Trending Stories</h1></div>
            <div className='flex flex-row gap-3 h-full p-2 '>
                {[{heading:"heading1" ,text:"text1",clapcount:"69"},{heading:"heading1" ,text:"text1",clapcount:"69"},{heading:"heading1" ,text:"text1",clapcount:"69"}

                ].map((item,i)=>(
                        <motion.div key={i} whileHover={{scaleY:1.09}} whileTap={{scale : 1}}  className={`hover:cursor-pointer flex flex-1 p-4 h-full flex-col rounded-xl shadow-xl  ${
        i==1 ? "bg-[#324f7b] text-white" : "bg-white" }`}>
                            <h1 className='font-CabinetGrotesk-Bold text-3xl '>{item.heading}</h1>
                            <div className='flex flex-1'>
                            <p className='font-CabinetGrotesk-Bold '>{item.text}</p>
                            </div>
                            <h2 className='font-CabinetGrotesk-Bold text-md text-end'><PiHandsClappingFill className='h-5 w-5 grid place-self-end'></PiHandsClappingFill>{item.clapcount}</h2>
                            
                        </motion.div>
                         
                ))}

            </div>
        </div>
        <div className='flex flex-1 bg-red-400'><h1 className='p-4 font-CabinetGrotesk-Bold text-2xl '>Analytics</h1></div>
    </div>
    )
}