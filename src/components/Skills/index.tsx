import React from 'react';
import { motion } from "framer-motion";
import { skillData } from "../../data/SkillData";
import { SkillSlider } from "./SliderSkill";
import { Certificate } from "./Certificate";

export const SkillsComponent: React.FC = () => {
    const formattedSkillData = skillData.map(skill => ({
        name: skill.label,
        icon: skill.icon,
        type: skill.category || ''
    }));

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'Dhia Dhaifullah - Curriculum Vitae.pdf';
        link.click();
    }

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-screen flex flex-col lg:flex-row p-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center relative">
                    <img src="/Github.png" alt="GitHub" className="object-contain w-full h-full" />
                </div>
                <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
                    <p className="text-[12px] text-center md:text-justify">
                        I am Dhia Dhaifullah from Indonesia, a student dedicated to pursuing higher education while continuing to develop skills in Technology Architect. Even though I am still in education, I have been actively learning and participating in various technology projects.

                        I have a deep interest in programming, computer networks, information security, and artificial intelligence. During my studies, I have been actively involved in activities outside the curriculum, including joining study groups and contributing to software development projects.

                        I have skills in programming with languages such as Python, Java, and JavaScript, and have knowledge of various frameworks such as Django, Spring, and React. I am also interested in exploring new technologies and enjoy facing complex challenges in the world of information technology.

                        {/*Additionally, I am active in the technology community, participating in online forums and attending technology-related events to continually expand my knowledge and professional network. I am determined to become a highly skilled and influential professional in the world of information technology, and contribute to technological progress in Indonesia and throughout the world.*/}
                    </p>
                    <div className="w-full flex gap-4">
                        <button
                            onClick={handleDownloadResume}
                            className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
                        >
                            Download My CV
                        </button>
                        {/*<button
                            onClick={handleDownloadResume}
                            className="p-4 rounded-lg ring-1 ring-black"
                        >
                            Download Resume
                        </button>*/}
                    </div>
                </div>
            </div>
            <div className='p-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
                <SkillSlider skills={formattedSkillData} />
                <Certificate />
            </div>
        </motion.div>
    );
}
