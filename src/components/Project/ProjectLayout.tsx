import React from "react";
import { motion } from "framer-motion";


const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

interface ProjectLayoutProps {
    demoLink: string;
    repo: string;

}
//
// interface LinkProps {
//     href: string;
//     children: React.ReactNode;
//     className?: string;
//
// }
//
// const Link: React.FC<LinkProps> = ({ href, children, className, ...props }) => {
//     return (
//         <a href={href} {...props}>
//             {children}
//         </a>
//     );
// }

// const ProjectLink = motion(Link);
export const ProjectLayout: React.FC<ProjectLayoutProps> = ({
    demoLink,
    repo,
}) => {
    return (
        <motion.a
            variants={item}
            href={demoLink}
            className=" text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
        >
            <a
                href={`https://github.com/ddhaifullah/${repo}`}
                className="w-full"
            >
                <img
                    className="w-full h-auto"
                    src={`https://github-readme-stats.vercel.app${demoLink}`}
                    alt="ddhaifullah"
                    loading="lazy"
                />
            </a>
        </motion.a>
    );
};