import logo from '../assets/logo.png'
import {easeIn, motion, scale} from "motion/react"
import { useEffect, useRef, useState } from 'react';
import '../styles/landingpage.css'
import { Link } from 'react-router-dom';
import Loginpage from './loginpage';
function Landingpage(){
    return(
        <>
        <Link to="/Loginpage">
            <motion.button
            initial={{scale:0,background:"#324F7B",color:"#F8F8F8"}}
            animate={{scale:1}}
            transition={easeIn}
            whileHover={{
                    scale : 1.1,
                    background: [
                        "linear-gradient(to right, #324F7B, #F8F8F8)",
                        "linear-gradient(to left, #F8F8F8, #324F7B)"
                    ],
                    color: ["#F8F8F8", "#324F7B"],
                    transition: { duration: 0.5 }
                }
                
            }

            
            className='login'>Login</motion.button>

            </Link>


            <Link to="/Register">
            <motion.button 
            initial={{scale:0,background:"#324F7B",color:"#F8F8F8"}}
            animate={{scale:1}}
            transition={easeIn}
            whileHover={{
                    scale : 1.1,
                    background: [
                        "linear-gradient(to right, #324F7B, #F8F8F8)",
                        "linear-gradient(to left, #F8F8F8, #324F7B)"
                    ],
                    color: ["#F8F8F8", "#324F7B"],
                    transition: { duration: 0.5 }
                }
                
            }
            className='signup'>Signup</motion.button>
            </Link>



            <div className='logo'>
            </div>
            <p className='logoname'>TELLIFY</p>
            <p className='slogan'>Create. Collaborate. Inspire.</p>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{duration:0.6, ease: "easeIn"}}
                className='sub-headline'>Unleash your imagination and co-write captivating stories with friends from anywhere in the world.</motion.p>
                    
            <div className='container'>
                

            </div>           
            
        
        </>
    )
}

export default Landingpage
