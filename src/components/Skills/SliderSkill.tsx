import React from "react";
import {SkillItem} from "./SkillItem";

interface SkillsCategoryProps {
    data: {
        name: string;
        icon: string;
        type: string;
    }[];
    animationTime: string;
    reverseAnimation: boolean;

}


const SkillsCategory = ({data, animationTime, reverseAnimation}: SkillsCategoryProps) => {
    return (
        <div className="scroll" style={{["--time" as string]: animationTime.toString()}}>
            {[...Array(2)].map((_, index) => (
                <div
                    className={`scroll-content ${reverseAnimation ? 'reverse' : 'normal'} ${index === 0 ? 'animate-loop-1 loop-delay-1' : 'animate-loop-2 loop-delay-2'}`}
                    key={index}>
                    {data.map((skill, skillIndex) => (
                        <SkillItem skill={skill} index={skillIndex} key={skillIndex}/>
                    ))}
                </div>
            ))}
        </div>
    );
};

interface SkillSliderProps {
    skills: {
        name: string;
        icon: string;
        type: string;
    }[];

}

export const SkillSlider: React.FC<SkillSliderProps> = ({skills}) => {

    if (skills && skills.length > 0) {

        const Backend = skills.filter((item) => item.type === 'backend');
        const Frontend = skills.filter((item) => item.type === 'frontend');
        const Utilities = skills.filter((item) => item.type === 'utility');
        const Languages = skills.filter((item) => item.type === 'language');

        return (
            <div className="section__skills">
                <SkillsCategory data={Languages} animationTime="120s" reverseAnimation={true} />
                <SkillsCategory data={Backend} animationTime="120s" reverseAnimation={false} />
                <SkillsCategory data={Frontend} animationTime="120s" reverseAnimation={true} />
                <SkillsCategory data={Utilities} animationTime="120s" reverseAnimation={false} />
            </div>
        );
    } else {
        return <></>
    }
};
