import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Images/logo-removebg-preview.png"

function Navbar() {
    return(
        <div className="navbar">
            <Link href={"/"}><Image className="logo" src={Logo} alt="Logo" width={100} height={50}/></Link>
            <div className="links-parent">
                <Link className="links" href={"/"}>Home</Link>
                <Link className="links" href={"/Services"}>Services</Link>
                <Link className="links" href={"/Aboutme"}>About me</Link>
                <Link className="links" href={"/Projects"}>Projects</Link>
                <Link className="links" href={"/Contactme"}>Contact me</Link>
            </div>
            <Link className="phonu" href="tel:+923701135722"><button className="hire-me"><p>Hire Me</p></button></Link>
        </div>
    );
};

export default Navbar;