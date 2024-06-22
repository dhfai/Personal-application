import React from 'react';
import {ProjectsComponents} from "../components/Project";
import { projectsData } from "../data/ProjectData";

export const Projects: React.FC = () => {
    return (
        <>
            <ProjectsComponents projects={projectsData} />
        </>
    );
}