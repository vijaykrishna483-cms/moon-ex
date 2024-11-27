import React, { useState } from 'react';

import { FiMinus } from "react-icons/fi";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { motion } from 'framer-motion';
import Light from '../assets/light.png'

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: 'How do I get a Referral Code?', answer: 'You receive your rewards in ETH instantly once someone you refer makes a transaction!' },
  { question: 'Do I get rewarded in tokens or ETH when I refer buyers?', answer: 'You receive your rewards in ETH instantly once someone you refer makes a transaction!' },
  { question: 'How do I get a Referral Code?', answer: 'You receive your rewards in ETH instantly once someone you refer makes a transaction!' },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div className=' flex  justify-center flex-col items-center'>
    <motion.div variants={leftVariants}
        initial="hidden"
        whileInView="show" className="bg-[#ffffff0c]   py-6 pb-12 rounded-xl  md:w-[60%] w-[90%] mt-[10%] flex  flex-col gap-4" >
      <h2 className='text-[#f9d423]  font-bold md:text-5xl text-4xl text-center border-b-2 border-b-[#ffffff0d] pb-[5%]' >FAQs</h2>
      {faqData.map((item, index) => (
        <motion.div  key={index} className='border-b-2 border-b-[#ffffff0d] px-8 flex flex-col justify-center ' >
          <motion.div  onClick={() => toggleAnswer(index)} className='w-[100%] md:px-8 h-[8vh] text-left rounded-xl flex flex-row justify-between '>
            <span className='md:text-xl text-[#ffffffbf]'>{item.question}</span>
            {activeIndex === index ? (
              <FiMinus className='md:w-[30px] md:h-[30px] w-[25px] h-[25px] bg-[#ffffff52] text-white rounded-full' />
            ) : (
              <HiOutlinePlusSmall  className='md:w-[30px] md:h-[30px] w-[25px] h-[25px] bg-[#ffffff52] text-white rounded-full'/>
            )}
          </motion.div>
          {activeIndex === index && (
            <motion.div className='md:px-8 pb-4' >
              <p className='text-lg text-[#ffffff39] font-light'>{item.answer}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
    
    <span className='absolute opacity-15 flex -left-[9%] top-[260%] '> <img src={Light} /></span>
    <span className='absolute opacity-15 flex left-[70%] top-[260%] '> <img src={Light} /></span>
    </motion.div>
  );
};

export default FAQ;

