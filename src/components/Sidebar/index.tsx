import { useState } from 'react'
import { motion } from 'framer-motion'
import {Links} from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'

export const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const variants = {
        open: {
            clipPath: "circle(2200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
    return (
        <motion.div
            animate={open ? "open" : "closed"}
            className='flex flex-col items-center justify-center bg-white text-black'
        >
            <motion.div
                variants={variants}
                className="fixed top-0 left-0 bottom-0 w-full bg-[rgba(5,5,5,0.3)] z-[999]"
                style={{ backdropFilter: "blur(10px)" }}
            >
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}