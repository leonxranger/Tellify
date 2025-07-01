import React from "react";
import { signOut , onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase-config"; // adjust path as needed
import { useNavigate } from 'react-router-dom';
import Sidebar from "./dashboard-components/sidebar";
import Main from "./dashboard-components/maincontents";
import Statsidebar from "./dashboard-components/statssidebar";
import { doc, getDoc} from 'firebase/firestore'
import { db } from '../config/firebase-config.jsx'
import { useEffect , useState } from 'react';
import { useUser } from "./usercontext.jsx";
export default function Dashboard() {
    const navigate = useNavigate();
          const handleLogout = () => {
            signOut(auth);
            navigate("/loginpage") 
          }
      const {userdata , loading} = useUser();

        if (loading) return <h1>Loading...</h1>;
        if (!userdata) return navigate("/loginpage");
          

    return(
      
      <>

      {/* original container div */}
        <div className=" flex flex-row w-full h-screen p-5 gap-3">

{/* particular component divs */}
        <Sidebar></Sidebar>        
        <Main ></Main>
        <Statsidebar userdata={userdata}></Statsidebar>
        
        </div>

      </>  
    )



}


