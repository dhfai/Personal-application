import React from "react";
import { socialLinks } from '../../data/LinkData'

export const SocialLink: React.FC = () => {
    return (
        <div className="flex gap-4 w-1/3 z-[99999]">
            {socialLinks.map(({ name, icon, link }) => (
                <a href={link} key={name} target="_blank" rel="noopener noreferrer">
                    <img src={"/" + icon} alt={name} width={24} height={24}/>
                </a>
            ))}
        </div>
    );
};
