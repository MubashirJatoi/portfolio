"use client";
import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import HTML from "../../../public/Images/HTML.png";
import CSS from "../../../public/Images/CSS.png";
import Typescript from "../../../public/Images/TYPESCRIPT.png";
import Next from "../../../public/Images/NEXTJS.png";
import Python from "../../../public/Images/PYTHON.png";

interface DT {
    name: string;
    progress: number;
    icon: StaticImageData;
}

function Skills() {
    const skills: DT[] = [
        { name: "HTML", progress: 100, icon: HTML },
        { name: "CSS", progress: 80, icon: CSS },
        { name: "Typescript", progress: 60, icon: Typescript },
        { name: "Next", progress: 50, icon: Next },
        { name: "Python", progress: 10, icon: Python },
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
            { threshold: 0.5 }
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
