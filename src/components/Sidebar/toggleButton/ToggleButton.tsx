import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { GearToggle } from "../../../utils/GearSVG/GearToggle";

const ToggleButton = ({ setOpen } : {setOpen: React.Dispatch<React.SetStateAction<boolean> >}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ container: containerRef });

    return (
        <motion.button
            className='z-[999] fixed w-[50px] h-[50px] rounded-[50%] top-[25px] left-[30px] border-none cursor-pointer'
            onClick={() => setOpen((prev) => !prev)}
        >
            <GearToggle scrollYProgress={scrollYProgress} />
        </motion.button>
    )
}

export default ToggleButton