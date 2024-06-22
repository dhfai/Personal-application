import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import React, { ReactNode, useEffect, useState } from "react";
import {Footer} from "../components/Footer";
import {StickyCursor} from "../utils/Cursor";

interface TransitionProviderProps {
    children: ReactNode;
}

export const TransitionProvider: React.FC<TransitionProviderProps> = ({ children }) => {
    const location = useLocation();
    const [key, setKey] = useState(location.pathname);

    useEffect(() => {
        setKey(location.pathname);
    }, [location.pathname]);


    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={key}
                // className="w-screen h-screen bg-gradient-to-b from-blue-300 to-red-100"
                className="bg-background text-foreground font-dm"
            >
                <motion.div
                    className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
                    initial={{ height: "140vh" }}
                    exit={{ height: "0vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.5 } }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                />
                <motion.div
                    className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-6xl cursor-default z-50 w-fit h-fit"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {location.pathname.substring(1)}
                </motion.div>
                <motion.div
                    className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
                    initial={{ height: "140vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.5 } }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                />
                <div className="h-24">
                    <Navbar />
                </div>
                <div className="h-full">{children}</div>
                    <Footer />
            </motion.div>
        </AnimatePresence>
    );
};
