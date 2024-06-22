import React from 'react';
import { motion } from "framer-motion";
import { Section } from './Section';

export const HomeComponents: React.FC = () => {

    return (
            <motion.div
                className="h-full"
                initial={{y: "-200vh"}}
                animate={{y: "0%"}}
                transition={{duration: 1}}
            >

                <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
                    <div className="h-1/2 lg:h-full lg:w-1/2 relative mr-10">
                        <img src="/LogicPro.jpg" alt="" className="rounded-lg object-contain w-full h-full"/>
                    </div>
                    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Full Stack Developer, Creative Technologist, and Tech Physics
                        </h1>
                        <p className="md:text-xl">
                            Welcome to my digital canvas, where innovation and creativity
                            converge. As a Full Stack Developer, Creative Technologist, and Tech Physics enthusiast,
                            my portfolio showcases a diverse collection of projects that reflect my commitment to
                            excellence.
                        </p>
                    </div>
                </div>
                {/* <Section /> */}
            </motion.div>
    )
}