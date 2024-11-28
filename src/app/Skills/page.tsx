"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import html from "../../../public/images/html.png";
import css from "../../../public/images/css.png";
import typescript from "../../../public/images/typescript.png";
import next from "../../../public/images/next.png";
import python from "../../../public/images/python.png";

interface DT {
    name: string;
    progress: number;
    icon: any;
}

function Skills() {
    const skills: DT[] = [
        { name: "HTML", progress: 100, icon: html },
        { name: "CSS", progress: 80, icon: css },
        { name: "TypeScript", progress: 60, icon: typescript },
        { name: "Next.js", progress: 50, icon: next },
        { name: "Python", progress: 10, icon: python },
    ];
    const circularProgressRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = circularProgressRefs.current.findIndex(
                            (ref) => ref === entry.target
                        );
                        if (index !== -1) {
                            startAnimation(index);
                        }
                    }
                });
            },
            { threshold: 0.5 } // Trigger when at least 50% of the element is visible
        );

        circularProgressRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const startAnimation = (index: number) => {
        const speed = 10;
        let progressStartValue = 0;
        const progressEndValue = skills[index].progress;
        const circularProgress = circularProgressRefs.current[index];

        const interval = setInterval(() => {
            progressStartValue++;
            if (circularProgress) {
                circularProgress.style.background = `conic-gradient(#FD6F00 ${
                    progressStartValue * 3.6
                }deg, #3A3A3A 0deg)`;
                const span = circularProgress.querySelector(".progress-value");
                if (span) span.textContent = `${progressStartValue}%`;
            }
            if (progressStartValue === progressEndValue) {
                clearInterval(interval);
            }
        }, speed);
    };

    return (
        <div className="container flex pt-[120px] justify-center gap-[30px]">
            {skills.map((skill, index) => (
                <div
                    className="circular-progress relative h-[100px] w-[100px] rounded-[50%] bg-[conic-gradient(#FD6F00_3.6deg,_#3A3A3A_0deg)] flex items-center justify-center text-center"
                    ref={(el) => {circularProgressRefs.current[index] = el}}
                    key={skill.name}
                >
                    <Image
                        src={skill.icon}
                        alt="icon"
                        width={30}
                        height={30}
                        className="icoon absolute top-[35px] bg-transparent [filter:brightness(0)_saturate(100%)_invert(59%)_sepia(6%)_saturate(4%)_hue-rotate(0deg)_brightness(90%)_contrast(100%)]"
                    />
                    <span className="progress-value mt-[150px] absolute text-[20px] font-[600] text-[#FD6F00]">0%</span>
                    <h2 className="text absolute mt-[180px] bottom-[-58px] text-[16px] font-[500] text-[#606060]">{skill.name}</h2>
                </div>
            ))}
        </div>
    );
}

export default Skills;
