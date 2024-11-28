import Image from "next/image";
import User from "../../../public/Images/user.png"

function Services() {
    return(
        <div className="services">
            <div className="services-text">
                <h3>Services</h3>
                <p>I create front-end websites, edit videos, and work proficiently with TypeScript, CSS, and HTML</p>
            </div>
            <div className="cards-parent">
                <div className="cards">
                    <div className="card">
                        <Image className="user" src={User} alt="User"/>
                        <p className="design">Web Development</p>
                        <p className="pop">Build responsive, user-friendly websites</p>
                    </div>
                    <div className="card">
                        <Image className="user" src={User} alt="User"/>
                        <p className="design">UI/UX Design</p>
                        <p className="pop">Create intuitive and appealing designs</p>
                    </div>
                    <div className="card">
                        <Image className="user" src={User} alt="User"/>
                        <p className="design">Responsive Design</p>
                        <p className="pop">Ensure compatibility across devices</p>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <Image className="user" src={User} alt="User"/>
                        <p className="design">Code Debugging</p>
                        <p className="pop">Fix front-end issues and bugs</p>
                    </div>
                    <div className="card">
                        <Image className="user" src={User} alt="User"/>
                        <p className="design">SEO Optimization</p>
                        <p className="pop">Improve website visibility on search engines</p>
                    </div>
                    <div className="card">
                        <Image className="user" src={User} alt="User"/>
                        <p className="design">Content Creation</p>
                        <p className="pop">Deliver engaging text, video, and graphics</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;