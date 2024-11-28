import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Images/logo-removebg-preview.png"
import Discord from "../../public/Images/discord.png"
import Linkdin from "../../public/Images/linkdin.png"
import Github from "../../public/Images/github.png"
import Vercel from "../../public/Images/vercel.png"
import Circle from "../../public/Images/bg-circle.png"
import Mailbox from "../../public/Images/email-box.png"
import Mailstick from "../../public/Images/email-stick.png"
import Phone from "../../public/Images/phone.png"

function Footer () {
    return(
        <div className="footer">
            <Link className="hnnm" href={"/"}><Image className="hmm1" src={Logo} alt="Logo" width={100}/></Link>
            <div id="waiting" className="links-parent">
                <Link id="what" className="links" href={"/"}>Home</Link>
                <Link id="what" className="links" href={"/"}>Services</Link>
                <Link id="what" className="links" href={"/"}>About me</Link>
                <Link id="what" className="links" href={"/"}>Portfolio</Link>
                <Link id="what" className="links" href={"/"}>Contact me</Link>
            </div>
            <div id="mm11" className="profiles">
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
                <div className="foryou">
                <div className="iccon">
                <div className="iccon">
                <Link className="mailbox" target="_blank" href="mailto:mubashirlukman231@gmail.com?subject=Subject%20Here&body=Hello,%20this%20is%20a%20pre-filled%20email%20body."><Image className="mailstick" src={Mailstick} alt="mailstick"/><Image className="mailbox" src={Mailbox} alt="mailbox"/></Link></div><Link className="fgh" target="_blank" href="mailto:mubashirlukman231@gmail.com?subject=Subject%20Here&body=Hello,%20this%20is%20a%20pre-filled%20email%20body."><p>Mubashirlukman231@gmail.com</p></Link>
                </div>
                <div className="iccon">
                <Link className="phonu" href="tel:+923701135722"><Image  id="iccon" className="phone" src={Phone} alt="phone"/><p>+92 370 113 5722</p></Link>
                </div>
                </div>
                <hr className="hr1" />
                <p className="dsgn">Design by @Mubashir.Hussain Front-end web Developer</p>
        </div>
    );
};

export default Footer;