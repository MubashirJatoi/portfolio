import Link from "next/link";

function Contactme () {
    return(
        <div className="Contactme">
            <div className="casas">
                <h1>Contact me</h1>
                <p>Cultivating Connections: Reach Out and Connect with Me</p>
            </div>
            <div className="form">
                <form action="/submit" method="POST">
                <div className="input11">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input11">
                    <input className="numm" type="tel" placeholder="Phone Number"/>
                    <select id="dropdown" name="dropdown">
                        <option value="" disabled selected>Service Of Interest</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    </div>
                    <div className="input11">
                        <input type="text" placeholder="age"/>
                        <textarea rows={10} cols={20} placeholder="Project Details..."></textarea>
                    </div>
                    <div className="unlimited">
                       <Link href={"mailto:mubashirlukman231@gmail.com"}><button>Send</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contactme;