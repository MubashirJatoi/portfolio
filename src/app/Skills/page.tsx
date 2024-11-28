"use client";
import { useEffect, useRef } from "react";
import Image, {StaticImageData} from "next/image";
import HTML from "../../../public/Images/html1.png";
import CSS from "../../../public/Images/css1.png";
import Typescript from "../../../public/Images/typescript1.png";
import Next from "../../../public/Images/next1.png";
import Python from "../../../public/Images/python1.png";

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
        <div className="container">
            {skills.map((skill, index) => (
                <div
                    className="circular-progress"
                    ref={(el) => {circularProgressRefs.current[index] = el}}
                    key={skill.name}
                >
                    <Image
                        src={skill.icon}
                        alt="icon"
                        width={30}
                        height={30}
                        className="icoon"
                    />
                    <span className="progress-value">0%</span>
                    <h2 className="text">{skill.name}</h2>
                </div>
            ))}
        </div>
    );
}

export default Skills;
