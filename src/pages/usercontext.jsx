// 1️⃣ Import React functions and Firebase tools
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../config/firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react';

const UserContext = createContext();

 export function Userprovider( {children}){
     const [userdata,setuserdata] = useState(null);
     const [loading, setLoading] = useState(true);

    useEffect(()=>{
              const fetchuserdata = onAuthStateChanged(auth, async(user)=>{
                  try{
                      if(user){
                          const userref = doc(db,"Users",user.uid);
                          const userSnap = await getDoc(userref)
                          console.log("Auth state changed:", user);

                      
                            if(userSnap.exists()){
                                setuserdata(userSnap.data());
                                

                            }else{
                            
                            console.log("No such document exists!!")
                            setuserdata(null);
                        }
                        setLoading(false);
                        }
                            
                     else{
                        console.log("No authenticated user found.");
                     }
                  }
                  catch(error){
                      console.error("Unable to fetch the required user data")
                  }
              });

              return ()=>fetchuserdata();

      },[]);


      return(
        <UserContext.Provider value={{userdata}}>

            {children}


        </UserContext.Provider>
      )


 }

 export function useUser() {
  return useContext(UserContext);
}




