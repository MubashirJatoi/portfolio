import Cv1 from "../../../public/Images/CV2.jpg"
import Image from "next/image";

function CV () {
    return(
        <div>
            <Image className="cv" src={Cv1} alt="cv" width={1349}/>
        </div>
    );
};

export default CV;