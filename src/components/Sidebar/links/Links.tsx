import React from 'react'
import { motion } from 'framer-motion'
import { links } from '../../../data/LinkData'
export const Links: React.FC = () => {
    const variants = {
        open: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    }
    const itemVariants = {
        open: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
        closed: { x: "-100vw" },
    }

    const linkHover = {
        scale: 1.1,
    }

    const linkTap = {
        scale: 0.9,
    }
    return (
        <motion.div
            className='absolute w-full h-full flex flex-col items-center justify-center gap-5 text-amber-50'
            variants={variants}
        >
            {links.map((link, index) => (
                <motion.a
                    key={index}
                    variants={itemVariants}
                    whileHover={linkHover}
                    whileTap={linkTap}
                    href={link.href}
                    className='text-[2rem] font-bold font-md tracking-[10px] uppercase'
                >
                    {link.text}
                </motion.a>
            ))}
        </motion.div>
    )
}
