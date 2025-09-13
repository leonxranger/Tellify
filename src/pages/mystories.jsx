import Sidebar from "./dashboard-components/sidebar"
import Statsidebar from "./dashboard-components/statssidebar"
import Header from "./mystories-components/header"



export default function Mystories(){
    return(
        <>
        <div className="h-screen w-full flex-row flex items-center justify-center gap-3 bg-white">

                <Sidebar className="flex flex-1 h-full  "></Sidebar>
                <div className="flex flex-col flex-11 bg-[#f8f8f8] w-3/4  h-11/12 rounded-md">
                
                <Header></Header>
                </div>

        </div>
        
        </>
    )
}