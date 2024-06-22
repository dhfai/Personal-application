import React from 'react';
import { motion } from "framer-motion";
import clsx from "clsx";

interface ItemLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export const ItemLayout: React.FC<ItemLayoutProps> = ({ children, className }) => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={clsx(
                "custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
                className
            )}
        >
            {children}
        </motion.div>
    );
};