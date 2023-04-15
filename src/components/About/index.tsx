import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function Idenx({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}    
        className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        
        <motion.img
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            src="https://cdn.sanity.io/images/ltuexkre/production/ac8058b25cc880765f6549dd27223349f37a7c2f-1173x1458.jpg"
            className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50"> little</span> background</h4>
            <p className="text-sm">
            As a skilled Full Stack Developer with experience in React, NodeJS, and AWS, I excel in analyzing technical needs, proposing technical choices and architecture, and managing projects. I have successfully stabilized a first version of a platform for sharing feeds for international events with virtual meeting rooms, document sharing, and global/private internal chat. My expertise includes Agile methodology, technical audit, documentation, cost estimation, and code quality control. I have also developed modules for carpentry businesses, including stress calculation, price calculation, and 2D drawing. Let me help you achieve your business goals with my technical expertise.
            </p>
        </div>
    </motion.div>
  )
}