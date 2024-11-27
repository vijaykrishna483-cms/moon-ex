import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import Logo from '../assets/logo.png';
import Corner from '../assets/corner.png'
import { motion } from 'framer-motion';
const navbar = () => {
  const [active, setActive] = useState(false); 

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <motion.div>
      {/* Desktop */}
      <motion.nav className="relative hidden md:flex font-raleway flex-row justify-around items-center mt-[5vh]">
        <img src={Logo} alt="Logo" />
        <ul className="flex md:flex-row gap-12 font-semibold">
          <motion.a href='/abc'    whileHover={{
        scale: 1.2, 
        color:'#f9d423', 
        transition: {
          duration: 0.8, 
          ease: "easeInOut",
        },
      }}  className="text-[#edd854]">Home</motion.a  >
          <motion.a href='/abc'    whileHover={{
        scale: 1.2, 
        color:'#f9d423', 
        transition: {
          duration: 0.8, 
          ease: "easeInOut",
        },
      }}  className="text-[#ffffff]">About Us</motion.a >
          <motion.a href='/abc'    whileHover={{
        scale: 1.2, 
        color:'#f9d423', 
        transition: {
          duration: 0.8, 
          ease: "easeInOut",
        },
      }}  className="text-[#ffffff]">Roadmap</motion.a  >
          <motion.a href='/abc'    whileHover={{
        scale: 1.2, 
        color:'#f9d423', 
        transition: {
          duration: 0.8, 
          ease: "easeInOut",
        },
      }}  className="text-[#ffffff]">FAQs</motion.a  >
          <motion.a href='/abc'    whileHover={{
        scale: 1.2, 
        color:'#f9d423', 
        transition: {
          duration: 0.8, 
          ease: "easeInOut",
        },
      }}  className="text-[#ffffff]">Contact Us</motion.a >
        </ul>
        <motion.button   whileHover={{
        y: [0, -10, 10, -10, 0], 
        transition: {
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut", 
        },
      }} className="w-auto bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-100 text-[#071624] font-bold py-2 px-4 rounded-3xl">
          Connect Wallet
        </motion.button>
      </motion.nav>

      {/* Mobile */}
      <motion.nav className="z-30 absolute h-[8vh] w-[100%]  flex justify-between items-center pR-4 md:hidden">
      <img src={Corner}  className="w-[18%] h-full" />
        <img src={Logo} alt="Logo" className="w-[70%] mt-[10px]" />
        <div onClick={toggleMenu} className="cursor-pointer mr-[20px]">
          {active ? <RxCross1 className='text-white' size={24} /> : <RxHamburgerMenu size={24}  className='text-white'/>}
        </div>
      </motion.nav>

      {active && (
        <ul className="absolute top-[8vh]  w-full bg-[#06121d] flex flex-col border-t-2 border-t-[#ffffff1b] items-center gap-6 py-4 md:hidden font-semibold">
          <li className="text-[#edd854] pb-2 w-[100%] text-center border-b-2 border-b-[#ffffff1b] ">Home</li>
          <li className="text-[#ffffff] pb-2 w-[100%] text-center border-b-2 border-b-[#ffffff1b]">About Us</li>
          <li className="text-[#ffffff] pb-2 w-[100%] text-center border-b-2 border-b-[#ffffff1b]">Roadmap</li>
          <li className="text-[#ffffff] pb-2 w-[100%] text-center border-b-2 border-b-[#ffffff1b]">FAQs</li>
          <li className="text-[#ffffff] ">Contact Us</li>
        </ul>
      )}
    </motion.div>
  );
};

export default navbar;
