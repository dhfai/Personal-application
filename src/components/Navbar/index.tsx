import React from "react";
import {SocialLink} from "../../utils/LinkProps/SocialLink";
import { Sidebar } from "../Sidebar";
import {motion} from "framer-motion";

export const Navbar: React.FC = () => {
    return (
        <div className="h-full flex items-center justify-between px-4 text-xl">
            <Sidebar />
            <div className="lg:flex xl:w-1/3 xl:justify-center">
                <motion.span
                    className='font-bold font-md'
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >
                    dhf.ai
                </motion.span>
            </div>
            <SocialLink  />
        </div>
    );
};