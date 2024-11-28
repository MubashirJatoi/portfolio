import Image from "next/image";
import Project1 from "../../../public/Images/Project1.png"
import Project2 from "../../../public/Images/Project2.png"
import Project3 from "../../../public/Images/Project3.png"
import Mile1 from "../../../public/Images/mile1.webp"
import Mile5 from "../../../public/Images/Mile5.png"
import Clone from "../../../public/Images/clone.png"
import Tailwind from "../../../public/Images/tailwind.png"
import Skills from "../Skills/page";
import Link from "next/link";

function Projects () {
    return(
        <div className="PROJECTS">
            <h1>Projects</h1>
            <p className="jjkkll">Creative Projects with Modern Web Technologies</p>
            <div>
                <div className="project">
                    <div className="idk-1">
                        <Link className="lilpum" target="_blank" href={"https://milestone2resumebymubashir-six.vercel.app/"}>
                            <Image className="Project-pic" src={Mile1} alt="Project"/>
                        </Link>
                    <div className="texton">
                        <Link className="lilpum" target="_blank" href={"https://milestone2resumebymubashir-six.vercel.app/"}>
                            <p className="ahm">Static Resume</p>
                            <p className="lil"><i className="lill">Design</i></p>
                        </Link>
                    </div>
                    </div>
                    <div className="idk-1">
                    <Link className="lilo" target="_blank" href={"https://milestone5by-mubashir-hussain.vercel.app/"}>
                    <Image className="Project-pic" src={Mile5} alt="Project"/>
                    </Link>
                    <div className="texton">
                    <Link className="lilo" target="_blank" href={"https://milestone5by-mubashir-hussain.vercel.app/"}>
                        <p className="ahm">Resume Builder</p>
                        <p className="lil"><i className="lill">Web Application</i></p>
                    </Link>
                    </div>
                    </div>
                    <div className="idk-1">
                    <Link className="lilii" target="_blank" href={"https://governor-css-ashy.vercel.app/"}>
                    <Image className="Project-pic" src={Clone} alt="Project"/>
                    </Link>
                    <div className="texton">
                    <Link className="lilii" target="_blank" href={"https://governor-css-ashy.vercel.app/"}>
                        <p className="ahm">Website Clone CSS</p>
                        <p className="lil"><i className="lill">Front-end</i></p>
                    </Link>
                    </div>
                    </div>
                </div>
                <div className="project">
                    <div className="idk-1">
                    <Link className="lilqq" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                    <Image className="Project-pic" src={Tailwind} alt="Project"/>
                    </Link>
                    <div className="texton">
                    <Link className="lilqq" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                        <p className="ahm">Clone Website Tailwind CSS</p>
                        <p className="lil"><i className="lill">Front-end</i></p>
                        </Link>
                    </div>
                    </div>
                    <div className="idk-1">
                    <Image className="Project-pic" src={Project1} alt="Project"/>
                    <div className="texton">
                        <p className="ahm">Name Project</p>
                        <p className="lil">Categories</p>
                    </div>
                    </div>
                    <div className="idk-1">
                    <Image className="Project-pic" src={Project3} alt="Project"/>
                    <div className="texton">
                        <p className="ahm">Name Project</p>
                        <p className="lil">Categories</p>
                    </div>
                    </div>
                </div>
                <div className="project">
                    <div className="idk-1">
                    <Image className="Project-pic" src={Project1} alt="Project"/>
                    <div className="texton">
                        <p className="ahm">Name Project</p>
                        <p className="lil">Categories</p>
                    </div>
                    </div>
                    <div className="idk-1">
                    <Image className="Project-pic" src={Project3} alt="Project"/>
                    <div className="texton">
                        <p className="ahm">Name Project</p>
                        <p className="lil">Categories</p>
                    </div>
                    </div>
                    <div className="idk-1">
                    <Image className="Project-pic" src={Project2} alt="Project"/>
                    <div className="texton">
                        <p className="ahm">Name Project</p>
                        <p className="lil">Categories</p>
                    </div>
                    </div>
                </div>
            </div>
            <Skills />
        </div>
    );
};

export default Projects;