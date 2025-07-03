import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";


import { useLocation } from "react-router-dom"
export default function Header(){

    const Location = useLocation();

    console.log(Location);
    return(

    
        <>
        
        <div className=" flex  flex-col gap-2 w-full">
            
            <div className="flex flex-row gap-4 font-CabinetGrotesk-Bold items-center p-3 ">

                <h1 className="text-[#333446]">DASHBOARD</h1> <IoIosArrowForward/>
                <h1 className="text-[#333446]">TEXT-EDITOR</h1>

            </div>
                
            <div className="font-CabinetGrotesk-Bold flex flex-row p-3 gap-4 items-center w-11/12 border-2">

                <IoIosArrowDroprightCircle className="h-7 w-7"/> <h1 className="text-3xl">MY STORY</h1>
                <div className="flex flex-2"></div>
                <button className="grid place-self-center px-4 border-2 px-3 py-2">SAVE</button>
            </div>


            <div>

            </div>

            <div>

            </div>


        </div>

        
        
        </>
    )
}