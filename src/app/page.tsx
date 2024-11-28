import Image from "next/image";
import Discord from "../../public/Images/discord.png"
import Linkdin from "../../public/Images/linkdin.png"
import Github from "../../public/Images/github.png"
import Vercel from "../../public/Images/vercel.png"
import Circle from "../../public/Images/bg-circle.png"
import BigCircle from "../../public/Images/Big-circle.png"
import Mypic from "../../public/Images/my-pic.png"
import Link from "next/link";


export default function Home() {
    return(
        <div className="Home">
        <div className="main">
            <div className="left-side">
                <p className="p1">Hi I am</p>
                <p className="p2">Mubashir Hussain</p>
                <h1 className="h1-1">Front-end web Developer</h1>
                <div className="profiles">
                    <div className="profiles-s">
                    <Link className="pprr" target="_blank" href="https://github.com/MubashirJatoi?tab=repositories">
                        <Image className="circle" src={Circle} alt="Circle" />
                        <Image id="i-1" className="emo" src={Github} alt="github" />
                    </Link>
                    </div>
                    <div className="profiles-s">
                    <Link className="pprr" target="_blank" href="https://www.linkedin.com/in/mubashir-hussain-0800322b5/">
                        <Image className="circle" src={Circle} alt="Circle" />
                        <Image id="linkdin" className="emo" src={Linkdin} alt="Linkdin" />
                    </Link>
                    </div>
                    <div className="profiles-s">
                    <Link className="pprr" target="_blank" href="https://vercel.com/mubashir-hussains-projects-9c037818">
                        <Image className="circle" src={Circle} alt="Circle" />
                        <Image id="i-2" className="not" src={Vercel} alt="vercel" width={18}/>
                    </Link>
                    </div>
                    <div className="profiles-s">
                    <Link className="pprr" target="_blank" href="https://discord.com/users/1161947326160572526">
                        <Image className="circle" src={Circle} alt="Circle" />
                        <Image id="i-3" className="emo" src={Discord} alt="discord" />
                        </Link>
                    </div>
                </div>
                <div className="btns">
                <Link className="phonu" href="tel:+923701135722"><button id="btn1" className="btn">Hire Me</button></Link>
                    <Link target="_blank" href={"/CV"}><button id="btn2" className="btn">Resume</button></Link>
                </div>
                <div className="my-thing">
                    <div className="all-same">
                        <p className="pp">1+</p>
                        <p className="pt">Experience</p>
                    </div>
                    <div className="hr-fake"></div>
                    <div className="all-same">
                        <p className="pp">10+</p>
                        <p className="pt">Project done</p>
                    </div>
                    <div className="hr-fake"></div>
                    <div className="all-same">
                        <p className="pp">1+</p>
                        <p className="pt">Happy Clients</p>
                    </div>
                </div>
            </div>
            <div className="right-side">
            <Image className="big-circle" src={BigCircle} alt="Big-Circle" width={420}/>
            <Image className="my-pic" src={Mypic} alt="my-pic" width={400}/>
            </div>
        </div>
        </div>
    );
};