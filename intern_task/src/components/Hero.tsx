import Sphere from '../assets/sphere.png';
import Circles from '../assets/circles.png';
import Navbar from './Navbar';
import Star from '../assets/star.png'
import SmStar from '../assets/smstar.png'
import { motion } from "framer-motion";
import Light from '../assets/light.png'
const Hero = () => {

 
  const leftVariants = {
    hidden: {
      opacity: 0,
      y: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

   



  
  const wavefMotion = {
    animate: {
      y: [10, -20, 20, -20, 10], 
      transition: {
        duration: 3,
        repeat: Infinity, 
        ease: "easeInOut", 
      },
    },
  };
  

  return (
    <motion.div
       style={{
      backgroundImage: `url(${Circles})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
    }}  
      className="w-screen h-[100vh] overflow-hidden flex flex-col  " 
    >
      <motion.div>
      <Navbar/>
      <span className='absolute opacity-25 flex -left-[15%] -top-[30%]'> <img src={Light} /></span>
      </motion.div>
      <motion.span  whileInView={{
        y: [2, -10, 10, -10, 2], 
        transition: {
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut", 
        },
      }} className='absolute ml-[7%] mt-[10%] md:visible hidden'> <img src={Star} /></motion.span>
           <span className='absolute opacity-30 flex left-[60%] top-[30%]'> <img src={Light} /></span>

      <motion.div className='flex md:flex-row flex-col justify-center md:items-left items-center mt-[60%] md:mt-[5%]'>
      <motion.div  variants={leftVariants}
        initial="hidden"
        whileInView="show" className='flex md:w-[60vw]  w-[100vw]  flex-col md:items-start items-center gap-3 justify-center md:mt-[5%] '>
     <motion.span variants={wavefMotion}  initial="animate"
      animate="animate" className='absolute md:mb-[30%] md:mt-[] -mb-[20%] ml-[70%] md:-ml-[30%]'> <img src={Star} /></motion.span>
      <h1 className=' md:text-7xl md:w-[] w-[90%] text-4xl md:text-left text-center font-bold text-[white]'>Trusted Multi-Chain <br/><span className='text-[#f9d423]'>DEX</span> Platform</h1>
      <p className='text-[#9E9E9E] w-[70%] md:w-[] md:text-left text-center '>Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>
      <motion.div className='flex gap-4 mt-4 md:items-left items-center '> <motion.button whileHover={{
        y: [0, -10, 10, -10, 0], 
        transition: {
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut", 
        },
      }} className="md:w-auto md:text-[1rem] text-[0.8rem] bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-100 text-[#071624] hover:text-[#071624] hover:bg-[#071624] font-bold py-2 px-4 rounded-3xl">
    Connect Wallet
   </motion.button>
   <motion.button whileHover={{
        y: [0, -10, 10, -10, 0], 
        transition: {
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut", 
        },
      }} className="md:w-auto bg-[#121e26] text-[0.8rem] md:text-[1rem] text-[#f4cf4d] border-2 border-[#f4cf4d] hover:text-[#071624] hover:bg-[#eab308] font-bold py-2 px-4 rounded-3xl">
    Trade Crypto
   </motion.button> </motion.div>

      </motion.div>
     <motion.div className=''>
     <motion.span  whileInView={{
        y: [0, -10, 10, -10, 0], 
        transition: {
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut", 
        },
      }} className='absolute md:ml-[7%] -ml-[40%] top-40'> <img src={SmStar} /></motion.span >

    <motion.img src={Sphere}  whileInView={{
        y: [0, -10, 10, -10, 0], 
        transition: {
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut", 
        },
      }} className='md:w-[200px] md:-mt-[10%] mt-[40%] w-[100px]' />
    <motion.span  whileInView={{
        y: [5, -10, 10, -10, 5], 
        transition: {
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut", 
        },
      }} className='absolute ml-[7%] mt-[5%] '> <img src={Star} /></motion.span>

     </motion.div>
     </motion.div>
    </motion.div>
  );
};

export default Hero;
