import { useRef, useState ,useEffect } from "react";
import googlesvg from '../assets/google-logo.svg'
import linkedinsvg from '../assets/linkedin-logo.svg'
import { motion } from "motion/react"
import logo from '../assets/logo-Copy.png'
import { auth } from '../config/firebase-config.jsx'
import { createUserWithEmailAndPassword, signInWithPopup ,updateProfile } from "firebase/auth"
import { googleprovider } from "../config/firebase-config.jsx";
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.svg"
import copyright from "../assets/copyright.png"
import eyehide from "../assets/eye-hide.svg"
import eyeview from "../assets/eye-shown.svg"
import { useNavigate } from 'react-router-dom';
import { createUserDocument } from "../database-functions/firestoreutil.jsx";

export default function Register() {
  
  const [email,setemail] = useState("");
  const [password,setpassword] = useState(""); 
  const [error, setError] = useState("");
  const enterPasswordRef = useRef();
  const confirmPasswordRef = useRef();
  const viewpasswordref = useRef();
  const [state,setstate] = useState("")
  const navigate = useNavigate();
  const [name, setName] = useState("");

  
  const signIn = async ()=>{
    try{
    setError("");
    if(enterPasswordRef.current.value === confirmPasswordRef.current.value){
      const result = await createUserWithEmailAndPassword(auth,email,password);
      await updateProfile(result.user,{displayName: name})
      await createUserDocument(result.user);
      console.log(auth.currentUser.email);
      navigate("/dashboard");
    }else{
      setError("Passwords do not match")
    }
    }catch(err){
      console.error(err);
      setError(err.message);
      
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
  

  const googlesignIn = async ()=>{
    try{
    setError("");
    
      const result = await signInWithPopup(auth,googleprovider);
      await createUserDocument(result.user);

      navigate("/dashboard");
    }
    
    catch(err){
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % title.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function togglevisible(){
    setstate(!state)
  }




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




      <div className=" bg-cover lg:ml-85 lg:w-100  md:mx-0 md:w-full w-full flex flex-col  items-center justify-center h-full mt-8 backdrop-blur-xs ">



      <h1 className="text-[#324f7b] text-2xl font-black mt-2 font-CabinetGrotesk-Bold">First time here?</h1>
      <h1 className="text-[#324f7b] text-4xl font-black my-5 font-CabinetGrotesk-Bold">Welcome to Tellify</h1>
      <h2 className="font-CabinetGrotesk-Bold">Sign up by entering this information below</h2>
        <div className="flex lg:w-90 md:w-70 my-7 justify-center flex-col    ">
          <h2 className="mt-4 font-CabinetGrotesk-Bold">Email Address</h2>
          <input
            type="text"
            placeholder="Enter Your email"
            className="h-10 w-full border-[#86A6DE] border-2 p-5 my-4 rounded-md "
            onChange={(e)=>setemail(e.target.value)}
            
          ></input>
          <h2 className="mt-2 font-CabinetGrotesk-Bold">Set An Username</h2>
          <input
            type="text"
            placeholder="Enter Your username"
            className="h-10 w-full border-[#86A6DE] border-2 p-5 m-0 rounded-md "
            onChange={(e)=>setName(e.target.value)}
            
          ></input>

        </div>
        <div className="flex lg:w-90 md:w-70  justify-center flex-col">
          <h2 className="font-CabinetGrotesk-Bold">Password</h2>

          {/* password show button */}
          <motion.img whileTap={{ scale: 0.95 }} whileHover={{scale:1.5}} className="h-4 w-4 grid place-self-end my-1 mx-2 hover:cursor-pointer" src={state?eyeview:eyehide} ref={viewpasswordref} onClick={()=>togglevisible()}/>




          <input
            type={state?"text":"password"}
            placeholder="Enter Your password"
            id="enter-password"
            className="w-10 w-full border-[#86A6DE] border-2 p-2.5 mb-3 rounded-md "
            ref={enterPasswordRef}
          ></input>
          <motion.h2 whileTap={{ scale: 0.95 }} className="text-end font-CabinetGrotesk-Bold cursor-pointer p-0 m-0">Forgot Password?</motion.h2>

          <h2 className="font-CabinetGrotesk-Bold">Confirm password</h2>
          <input
            type={state?"text":"password"}
            id="confirm-password"
            placeholder="Confirm password"
            className="w-10 w-full border-[#86A6DE] border-2 p-2.5 m-0 rounded-md "
            onChange={(e)=>setpassword(e.target.value)}
            ref={confirmPasswordRef }>
          </input>
        </div>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} 
          onClick={signIn}

        className=" h-11 w-30 grid place-items-center  overflow-hidden my-5 rounded-md 
        hover:cursor-pointer bg-mainblue text-white ">Sign up</motion.button>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="flex flex-row h-10 my-5 w-full align-center justify-center gap-10">
          <motion.button
          onClick={googlesignIn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} 
          className=" hover:cursor-pointer h-12 w-30 border-black border-2 flex flex-row-2 justify-center align-center place-items-center rounded-md "><img className="h-1/2 w-1/2 col-span-1 m-0 p-0 place-self-center flex-1 " src={googlesvg} alt="Google Logo" /><p className="flex-2">Sign Up</p></motion.button>
          <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }} 
           className=" hover:cursor-pointer h-12 w-30 border-black border-2 flex flex-row-2 justify-center align-center place-items-center rounded-md "><img className="h-1/2 w-1/2 col-span-1 m-0 p-0 place-self-center flex-1 " src={linkedinsvg}></img><p className="flex-2 ">Sign Up</p></motion.button>
       
        </div>
      </div>
        

      </div>
      
    </>
    
  );}
