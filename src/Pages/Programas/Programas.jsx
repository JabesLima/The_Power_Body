import "../../Styles/ProgramasST/ProgramasST.css";
import img1 from "../../assets/Programas/gym.jpeg";
import img2 from "../../assets/Programas/crossfit.jpeg"
import img3 from "../../assets/Programas/boxe.jpeg"


export default function Programas(){
    return(
        <div className="Programas">
            <h1>Nossos programas</h1>

            <div className="Imagems">
                <div className="img1"><h1>Academia</h1><img src={img1} alt="Academia"/></div>
                <div className="img2"><h1>Crossfit</h1><img src={img2} alt="Crossfit" /></div>
                <div className="img3"><h1>Boxe</h1><img src={img3} alt="Boxe"/></div>
            </div>
        </div>
    )
}