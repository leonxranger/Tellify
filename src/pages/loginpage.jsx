import { useRef, useState ,useEffect } from "react";
import googlesvg from '../assets/google-logo.svg'
import linkedinsvg from '../assets/linkedin-logo.svg'
import { motion } from "motion/react"
import logo from '../assets/logo-Copy.png'
import { auth } from '../config/firebase-config.jsx'
import { signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import { googleprovider } from "../config/firebase-config.jsx";
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.svg"
import copyright from "../assets/copyright.png"
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore"; 
import { createUserDocument } from "../database-functions/firestoreutil.jsx";


export default function Loginpage() {
  
  const [email,setemail] = useState("");
  const [password,setpassword] = useState(""); 
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const signIn = async ()=>{
    try{
    const result = await signInWithEmailAndPassword(auth,email,password);
    await createUserDocument(result.user);
    navigate("/dashboard")
    ; 
    }catch(err){
      console.error(err);
      setError(err.message);
    }
  }

  const googlesignIn = async ()=>{
    try{
    setError("");


    const result = await signInWithPopup(auth,googleprovider);
    const user = result.user;
    if (user) {
    await createUserDocument(user);
    } else {
      console.error('No user found from Google sign-in');
    }
     
    navigate("/dashboard")
    }catch(err){
      console.error(err);
      switch (err.code) {
      case "auth/wrong-password":
        setError("Incorrect password. Please try again.");
        break;
      case "auth/user-not-found":
        setError("No account found with this email.");
        break;
      case "auth/invalid-email":
        setError("Invalid email format.");
        break;
      case "auth/account-exists-with-different-credential":
        setError("This email is linked with Google login. Please use 'Login with Google'.");
        break;
      default:
        setError("Login failed. Please try again.");
    }
    }
  }

  const title = ["More poetic","Friendly and modern"];
  const body =["Every story starts with a spark.Find your co-author, weave your words, and light up the world with stories that matter.","Tired of writing alone? Team up with like-minded writers, build stories together, and have fun doing it."]
  const colour =["#F8F8F8,#393E46"]
  const [index,setIndex] = useState(0);
  const headingElement = document.querySelector('#heading');
  const bodyline = document.querySelector('#bodyline');


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % title.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

   useEffect(()=>{

   })













  return (

    <>
    <div className="  h-full w-full flex   flex-col-reverse md:flex-row  ">
   
   {/* side-div */}
    <div className=" w-100 h-screen flex flex-row md:flex-col    bg-mainblue bg-[url(./assets/background.png)] ">
        <div className="flex w-full h-20 align-center backdrop-blur">
          <img src={logo} className="h-10 w-10 m-4"></img>
          <h1 className="text-[#F8F8F8] mt-4 text-2xl font-CabinetGrotesk-Bold ">Tellify</h1>
        </div>





        <div className="flex flex-1  flex-2"></div>


        {/* left sidebar context */}
        <div className="flex flex-4 flex-col backdrop-blur">



          <div className="flex flex-1 text-[#F8F8F8] mt-4 text-3xl font-CabinetGrotesk-Bold  "><motion.h1  key={title[index]}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        
                        className="grid place-self-end p-3" id="heading">{title[index]}</motion.h1></div>
          
          
          
          
          {/* sliders */}
          <div className="flex flex-1 flex-col  text-[#E7EFC7]  text-base font-CabinetGrotesk-Bold p-4 gap-2">
            
            <motion.h3 className="tracking-wide p-0" id="bodyline"
            
            
            key={body[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        
        >{body[index]}
            </motion.h3>

            <div className="flex flex-row flex-1 gap-2 justify-start items-center">

              <div className="flex gap-2 mt-6">
  {[0, 1].map((i) => (
    <div
      key={i}
      className={`h-2 w-8 rounded-md transition-colors duration-300 ${
        index === i ? "bg-white" : "bg-[#222831]"
      }`}
    />
  ))}
</div>


          </div>
              
          
          </div>

              <div className="flex flex-1   flex-row gap-3">
                
                <img src={twitter} alt="" className="h-7  w-7 ml-4 my-4" />
                <h1 className="font-CabinetGrotesk-Bold text-bold text-[#F8F8F8] text-3xl my-3">in</h1>
              </div>


              <div className="flex flex-1 backdrop-blur font-CabinetGrotesk-Bold text-white text-sm ">
                <h1 className=" mx-4 ">privacy policy</h1>
                <h1 className="mr-4">Certificate</h1>
                <img src={copyright} className="h-5 w-5"></img><span>2025 Tellify</span>

          </div>

        </div>

    </div>




      <div className=" bg-cover lg:ml-85 lg:w-100  md:mx-0 md:w-full w-full flex flex-col  items-center justify-center h-full mt-15 backdrop-blur-xs ">


      <h1 className="text-[#324f7b] text-4xl font-black my-5 font-CabinetGrotesk-Bold">Welcome to Tellify</h1>
      <h2 className="font-CabinetGrotesk-Bold">Sign in by entering this information below</h2>
        <div className="flex lg:w-90 md:w-70 my-10 justify-center flex-col    ">
          <h2 className="my-7 font-CabinetGrotesk-Bold">Email Address</h2>
          <input
            type="text"
            placeholder="Enter Your email"
            className="h-10 w-full border-[#86A6DE] border-2 p-5 m-0 rounded-md "
            onChange={(e)=>setemail(e.target.value)}
          ></input>
        </div>
        <div className="flex lg:w-90 md:w-70 my-10 justify-center flex-col">
          <h2 className="font-CabinetGrotesk-Bold">Password</h2>
          <motion.h2 whileTap={{ scale: 0.95 }} className="text-end font-CabinetGrotesk-Bold cursor-pointer">Forgot Password?</motion.h2>
          <input
            type="password"
            placeholder="Enter Your password"
            className="w-10 w-full border-[#86A6DE] border-2 p-2.5 m-0 rounded-md "
            onChange={(e)=>setpassword(e.target.value)}
          ></input>
        </div>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} 
          onClick={signIn}

        className=" h-11 w-30 grid place-items-center  overflow-hidden my-5 rounded-md 
        hover:cursor-pointer bg-mainblue text-white ">Sign In</motion.button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="flex flex-row h-10 my-5 w-full align-center justify-center gap-10">
          <motion.button
          onClick={googlesignIn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} 
          className=" hover:cursor-pointer h-10 w-20 border-black border-2 flex flex-row-2 justify-center align-center place-items-center rounded-md "><img className="h-1/2 w-1/2 col-span-1 m-0 p-0 place-self-center flex-1 " src={googlesvg} alt="Google Logo" /><p className="flex-2">Login</p></motion.button>
          <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} 
           className=" hover:cursor-pointer h-10 w-20 border-black border-2 flex flex-row-2 justify-center align-center place-items-center rounded-md "><img className="h-1/2 w-1/2 col-span-1 m-0 p-0 place-self-center flex-1 " src={linkedinsvg}></img><p className="flex-2">Login</p></motion.button>
       
        </div>
      </div>
        

      </div>
    </>
  );
}