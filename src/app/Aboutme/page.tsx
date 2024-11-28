import Image from "next/image";
import Mypic from "../../../public/Images/my-pic.png"
import Rectangle from "../../../public/Images/rectangle.png"
import Download from "../../../public/Images/download.png"
import Link from "next/link";

function Aboutme () {
    return(
        <div className="aboutme">
            <div className="aboutme-text">
                <h3>About Me</h3>
                <p>User Interface and User Experience and Also video editing</p>
            </div>
            <div className="aboutme-section">
                <div>
                <Image className="rectangle" src={Rectangle} alt="rectangle" width={350}/>
                <Image className="aboutme-pic" src={Mypic} alt="my-pic" width={400}/>
                </div>
                <div className="aboutme-font">
                    <p>I am Mubashir Hussain, an 18-year-old from Karachi, Sindh, belonging to the Jatoi caste. A year ago, I completed my matriculation and now study in 12th grade at Sindh Muslim College. My journey in IT began when I learned about the Governor of Sindh’s initiative offering an IT course at the Governor’s House. After passing a test in physics, math, and IQ, I joined the program.In the first quarter, I learned TypeScript and passed the exams, advancing to the second quarter. Now, I’ve gained skills in HTML, CSS, TypeScript, some JavaScript, and Python, and I’m currently exploring Next.js. This program has been transformative, and I’m truly grateful to the Governor for creating such an opportunity to help young learners like me grow in the world of technology.</p>
                    <Link target="_blank" href={"/CV"}><button><Image id="nmm1" className="download" src={Download} alt="download"/>Resume</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;