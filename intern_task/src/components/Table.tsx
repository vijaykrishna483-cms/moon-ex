



import { motion } from 'framer-motion';
import Logo from '../assets/nLogo.png';
import Uni from '../assets/uniswap.png';
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import Light from '../assets/light.png';

const Table = () => {

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

  const points = [
    "Point no one",
    "Point no two",
    "Point no three",
    "Point no four",
    "Point no five",
    "Point no six"
  ];

  return (
    <motion.div className="h-[full] mt-[6%] flex flex-col justify-center items-center px-[10%]">
      <motion.h1
        variants={leftVariants}
        initial="hidden"
        whileInView="show"
        className='w-[88%] text-white text-3xl md:text-4xl justify-center items-center text-left font-bold mb-[20px]'>
        Why <span className='text-[#f9d423]'>MoonEX </span>?
      </motion.h1>

      <motion.div
        variants={leftVariants}
        initial="hidden"
        whileInView="show"
        className="w-[90%] px-[20px] py-[20px] bg-[#ffffff08] h-[full] flex-row items-center justify-center rounded-xl">
        <motion.div className='h-[60px] flex flex-row border-b-[1px] border-b-[#b1b0b050]'>
          <motion.div className="md:w-[35%] w-[60%] border-r-[1px] border-r-[#b1b0b050] text-[#f9d423] md:text-4xl text-lg font-neueMachina font-bold text-center">
            Comparison
          </motion.div>

          <motion.div className="md:w-[35%] w-[20%] border-r-2 border-r-[#b1b0b050] flex justify-center items-center">
            <img
              src={Logo}
              className='ml-[16%] md:rotate-0 rotate-90'
              alt="Logo"
            />
          </motion.div>

          <motion.div className="md:w-[30%] w-[20%]">
            <img
              src={Uni}
              className='md:ml-[16%] md:mt-[0%] mt-[45%] md:rotate-0 rotate-90'
              alt="University Logo"
            />
          </motion.div>
        </motion.div>

        {points.map((point, index) => (
          <motion.div key={index} className='h-[60px] flex flex-row border-b-[1px] border-b-[#b1b0b050]'>
            <motion.div className="md:w-[35%] w-[60%] border-r-[1px] border-r-[#b1b0b050] flex flex-row align-middle items-center text-left pl-[20px] md:text-[1.3rem] text-[#b6b6b678]">
              {index + 1}. {point}
            </motion.div>

            <motion.div className="md:w-[35%] w-[20%] border-r-2 border-r-[#b1b0b050] flex justify-center items-center">
              <motion.span
                whileHover={{
                  y: [0, -10, 10, -10, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="flex justify-center items-center">
                <TiTick className='text-[#34bd5f] text-3xl md:text-5xl' />
              </motion.span>
            </motion.div>

            <motion.div className="md:w-[30%] w-[20%] flex flex-row align-middle items-center justify-center">
              <motion.span
                whileHover={{
                  y: [0, -10, 10, -10, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="flex justify-center items-center">
                <ImCross className='text-[#b10961] md:text-2xl' />
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <span className='absolute opacity-10 flex left-[1%] top-[130%]'>
        <img src={Light} />
      </span>
    </motion.div>
  );
}

export default Table;
