import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
import { motion } from 'framer-motion'

const Features = () => {


    
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
        duration: 1.5,
        ease: 'easeOut',
      },
    },
  };
  
      
  const rightVariants = {
    hidden: {
      opacity: 0,
      y: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
    },
  };




  return (
    <motion.div  className='mt-[10vh]'>
            <motion.h1  variants={leftVariants}
        initial="hidden"
        whileInView="show" className='w-[100%] text-white md:text-5xl text-4xl mb-[7vh] justify-center items-center text-center font-bold '>Our <span className='text-[#f9d423]'>Features</span></motion.h1 >
     <motion.div variants={rightVariants}
        initial="hidden"
        whileInView="show" className='flex md:flex-row flex-col justify-center gap-8 items-center '>
        <motion.div whileHover={{
        y: [0, -10, 10, -10, 0], 
        transition: {
          duration: 2,
          repeat: Infinity, 
          ease: "easeInOut", 
        },
      }} className='md:w-[20%] w-[70%] h-[35vh] md:h-[45vh] flex flex-col gap-4 bg-[#ffffff10] pb-16  pt-8 px-6 rounded-xl border-2 border-[#1c2a36]'><img src={one} className='w-[30%]' /> <h1 className='text-[#f1edede3] md:text-2xl text-xl'>Cheapest TXs</h1> <p className='text-[#f1eded9c] md:text-lg'>Exchange popular digital currencies at the cheapest possible transaction price </p></motion.div>
        <motion.div whileHover={{
        y: [0, -10, 10, -10, 0], 
        transition: {
          duration: 2,
          repeat: Infinity, 
          ease: "easeInOut", 
        },
      }} className='md:w-[20%] w-[70%] h-[35vh] md:h-[45vh]   flex flex-col gap-4 bg-[#ffffff10] pb-16  pt-8 px-6 rounded-xl border-2 border-[#1c2a36]'><img src={two} className='w-[30%]' /> <h1 className='text-[#f1edede3] md:text-2xl text-xl'>CerTIK</h1> <p className='text-[#f1eded9c] md:text-lg'>We are Audited by Certik. CertiK is the leading security-focused ranking platform to </p></motion.div>
        <motion.div whileHover={{
        y: [0, -10, 10, -10, 0], 
        transition: {
          duration: 2,
          repeat: Infinity, 
          ease: "easeInOut", 
        },
      }} className='md:w-[20%] w-[70%] h-[35vh] md:h-[45vh]   flex flex-col gap-4 bg-[#ffffff10] pb-16  pt-8 px-6 rounded-xl border-2 border-[#1c2a36]'><img src={three} className='w-[30%]' /> <h1 className='text-[#f1edede3] md:text-2xl text-xl'>No Contract Sells</h1> <p className='text-[#f1eded9c] md:text-lg'>No contract sells to fund the marketing wallets </p></motion.div>
        <motion.div whileHover={{
        y: [0, -10, 10, -10, 0], 
        transition: {
          duration: 2,
          repeat: Infinity, 
          ease: "easeInOut", 
        },
      }} className='md:w-[20%] w-[70%] h-[35vh] md:h-[45vh]   flex flex-col gap-4 bg-[#ffffff10] pb-16  pt-8 px-6 rounded-xl border-2 border-[#1c2a36]'><img src={four} className='w-[30%]' /> <h1 className='text-[#f1edede3] md:text-2xl text-xl'>CrossDex Support</h1> <p className='text-[#f1eded9c] md:text-lg'>Exchange popular digital currencies at the cheapest possible transaction price </p></motion.div>

     </motion.div>

    </motion.div>
  )
}

export default Features
