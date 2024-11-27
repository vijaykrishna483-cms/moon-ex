import React from 'react'
import { IoIosSend } from "react-icons/io";
import { RiTwitterLine } from "react-icons/ri";
import { FaRedditAlien } from "react-icons/fa6";
import Footerlogo from '../assets/footerlogo.png'
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <motion.div className='flex h-full md:flex-row flex-col  justify-around items-center  bg-[#051422]  mt-[20vh]'>
      <motion.div><img src={Footerlogo} /></motion.div>
      <motion.div className='md:md-[] mb-[35px]'>
        <motion.ul className='flex flex-row md:gap-16 gap-4 text-white font-bold'>
           <motion.li initial={{ scale: 1, }}
      whileHover={{
        scale: 1.2, 
        color:'#f9d423', 
        transition: {
          duration: 0.8, 
          ease: "easeInOut",
        },
      }}>About Us</motion.li>
           <motion.li initial={{ scale: 1, }}
      whileHover={{
        scale: 1.2, 
        color:'#f9d423', 
        transition: {
          duration: 0.8, 
          ease: "easeInOut",
        },
      }} >Roadmap</motion.li>
           <motion.li initial={{ scale: 1, }}
      whileHover={{
        scale: 1.2, 
        color:'#f9d423', 
        transition: {
          duration: 0.8, 
          ease: "easeInOut",
        },
      }}>FAQs</motion.li>
           <motion.li initial={{ scale: 1, }}
      whileHover={{
        scale: 1.2, 
        color:'#f9d423', 
        transition: {
          duration: 0.8, 
          ease: "easeInOut",
        },
      }}>Contact Us</motion.li>
        </motion.ul>
      </motion.div>
      <motion.div className='md:py-[] pb-[35px]'>
      <h1 className='w-[100%] text-white mb-[1vh] text-2xl justify-center items-center text-center font-bold '>Our <span className='text-[#f9d423]'>Features</span></h1>
        <motion.div className='flex flex-row gap-3 text-white  text-4xl'>
<motion.span initial={{ scale: 1, }}
      whileHover={{
        scale: 1.2, 
        color:'#f9d423', 
        transition: {
          duration: 0.8, 
          ease: "easeInOut",
        },
      }} > <IoIosSend />  </motion.span>
<motion.span  initial={{ scale: 1, }}
      whileHover={{
        scale: 1.2, 
        color:'#f9d423', 
        transition: {
          duration: 0.8, 
          ease: "easeInOut",
        },
      }}>  <FaRedditAlien/> </motion.span>
<motion.span  initial={{ scale: 1, }}
      whileHover={{
        scale: 1.2, 
        color:'#f9d423', 
        transition: {
          duration: 0.8, 
          ease: "easeInOut",
        },
      }}>    <RiTwitterLine/></motion.span>
          
      
        
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Footer
