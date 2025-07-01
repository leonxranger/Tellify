import logoutsvg from '../../assets/dashboard/logout.svg'
import logo from '../../assets/logo-copy.png'

import calendar from '../../assets/dashboard/calendar.svg'
import books from '../../assets/dashboard/books.svg'
import handshake from '../../assets/dashboard/handshake.svg'
import home from '../../assets/dashboard/home.svg'

import settings from '../../assets/dashboard/setting.svg'

import {signOut} from "firebase/auth"
import { motion  } from "motion/react"
import {auth} from '../../config/firebase-config.jsx'
import { useNavigate } from 'react-router-dom'

export default function Sidebar(){
  const navigate = useNavigate();
  const logout=()=>{
    try{
      signOut(auth)
      console.log("user logged out")
      navigate("/loginpage")
    }catch(error){
      console.log(`the error is ${error}`);
    }
    
  }


    return(
        <>
        <div className="flex flex-1 items-center justify-center">


           {/* Menu Icons with Tooltips */}
  <div className="flex flex-col gap-4 bg-[#324f7b] rounded-xl w-2/4 h-full items-center justify-center   ">
    {[
      { src: home, label: "Dashboard" , navigate:"/dashboard",},
      { src: books, label: "My Stories" ,navigate:"/mystories"},
      { src: handshake, label: "Collaborations",navigate:"/collabs" },
      { src: calendar, label: "calendar",navigate:"/calendar" },
      { src: settings, label: "Settings",navigate:"/settings" },
      { src: logoutsvg, label: "Logout",navigate:"/loginpage" }
      
    ].map((item, i) => (
      <div key={i} className="relative group flex justify-center">
        <motion.img src={item.src} className="w-10 h-10 my-10 hover:cursor-pointer 0 hover:bg-[#5067aa] p-2 rounded-md  " alt={item.label}     onClick={i === 5 ? () => logout() : () => navigate(item.navigate)}
/>
        <span className="absolute left-5 top--2 opacity-50 whitespace-nowrap text-md bg-white text-black px-2 py-1 rounded shadow scale-0 group-hover:scale-100  transition origin-left z-50">
          {item.label}
        </span>
       
      </div>
    ))}


    {/* <div className="flex flex-1  align-center justify-center"><img className="h-8 w-8 grid place-self-center" onClick={logout} src={logoutsvg}></img>
    <span className="absolute left-5 top--2 opacity-50 whitespace-nowrap text-md bg-white text-black px-2 py-1 rounded shadow scale-0 group-hover:scale-100  transition origin-left z-50">
        Logout
        </span></div> */}
  </div>
        </div>
        </>
    )
}