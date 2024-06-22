import React from "react";
import { ItemLayout } from "./ItemLayout";

export const DashboardComponent = () => {
    return (
        <section className="p-4 w-full">
            <div className="grid grid-cols-12 gap-6">
                <ItemLayout className="col-span-full md:col-span-8 row-span-2 flex-col items-start">
                    <h2 className="text-2xl md:text-4xl font-bold text-left capitalize mb-4">
                        About Me as a Developer
                    </h2>
                    <p className="text-base md:text-lg font-light">
                        My journey in web development is powered by an array of mystical
                        tools and languages, with JavaScript casting the core of my
                        enchantments. I wield frameworks like React.js and Next.js with
                        precision, crafting seamless portals (websites) that connect realms
                        (users) across the digital universe. The ancient arts of the
                        Jamstack empower me to create fast, secure, and dynamic experiences,
                        while my design skills ensure every creation is not only functional
                        but visually captivating. Join me as I continue to explore new
                        spells and technologies to shape the future of the web.
                    </p>
                </ItemLayout>

                <ItemLayout className="col-span-full md:col-span-4 text-accent">
                    <p className="text-5xl font-semibold mb-2">2+</p>
                    <p className="text-base font-semibold">Clients</p>
                </ItemLayout>

                <ItemLayout className="col-span-full md:col-span-4 text-accent">
                    <p className="text-5xl font-semibold mb-2">3+</p>
                    <p className="text-base font-semibold">Years of Experience</p>
                </ItemLayout>

                <ItemLayout className="col-span-full md:col-span-4 !p-0">
                    <img
                        className="w-full h-auto"
                        src="https://github-readme-stats.vercel.app/api/top-langs?username=ddhaifullah&theme=transparent&hide_border=true&title_color=8644A2&text_color=FFFFFF&icon_color=8644A2&text_bold=false"
                        alt="ddhaifullah_stats"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className="col-span-full md:col-span-8 !p-0">
                    <img
                        className="w-full h-auto"
                        src="https://github-readme-stats.vercel.app/api?username=ddhaifullah&theme=transparent&hide_border=true&title_color=8644A2&text_color=FFFFFF&icon_color=8644A2&text_bold=false"
                        alt="ddhaifullah_stats"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className="col-span-full">
                    <img
                        className="w-full h-auto"
                        src="https://skillicons.dev/icons?i=jest,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,kali,arch,ubuntu,redhat,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn"
                        alt="ddhaifullah_stats"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className="col-span-full md:col-span-6 !p-0">
                    <img
                        className="w-full h-auto"
                        src="https://github-readme-streak-stats.herokuapp.com?user=ddhaifullah&theme=dark&hide_border=true&type=svg&background=EB545400&ring=8644A2&currStreakLabel=8644A2"
                        alt="ddhaifullah_stats"
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className="col-span-full md:col-span-6 !p-0">
                    <a
                        href="https://github.com/codebucks27/Linux-Customization"
                        className="w-full"
                    >
                        <img
                            className="w-full h-auto"
                            src="https://github-readme-stats.vercel.app/api/pin/?username=ddhaifullah&repo=Manga-Web&theme=transparent&hide_border=true&title_color=8644A2&text_color=FFFFFF&icon_color=8644A2&text_bold=false&description_lines_count=2"
                            alt="ddhaifullah_stats"
                            loading="lazy"
                        />
                    </a>
                </ItemLayout>
            </div>
        </section>
    );
};
