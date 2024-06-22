import React from 'react';
import {DashboardComponent} from "../components/Dashboard";
export const DashboardPage = () => {
    return (
        <>
            <img
                src='/about-background.png'
                sizes="100vw"
                alt="Next.js Portfolio website's about page background image"
                className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
            />
            <div className="relative w-full h-screen flex flex-col items-center justify-center">
                <div className="absolute flex flex-col items-center text-center left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
                        Dhia.Ai
                    </h1>
                    <p className="font-light text-foreground text-lg">
                        A Personal Portfolio Website
                    </p>
                </div>
            </div>
            <DashboardComponent />
        </>
    );
}