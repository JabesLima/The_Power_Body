import "../../Styles/IntagranST/InstagramST.css";
import Foto1 from "../../assets/Instagram/foto1.jpeg";
import Foto2 from "../../assets/Instagram/foto2.jpeg";
import Foto3 from "../../assets/Instagram/foto3.jpeg";
import Foto4 from "../../assets/Instagram/foto4.jpeg";


export default function Instagram(){
    return(
        <div className="Instagram">
            <h1>Siga-nos no Instagram</h1>

            <div className="imgInstagram">

                <div className="imgIS1">
                <a href="https://www.instagram.com/the_power_body?igsh=MmVsYWpxenE1aDA2" target="_blank">
                <img src={Foto1} alt="pageI" />
                <i className="fab fa-instagram"/>
                </a>
                </div>

                <div className="imgIS2">
                <a href="https://www.instagram.com/the_power_body?igsh=MmVsYWpxenE1aDA2" target="_blank">
                <img src={Foto2} alt="pageI" />
                <i className="fab fa-instagram" />
                </a>
                </div>


                <div className="imgIS3">
                <a href="https://www.instagram.com/the_power_body?igsh=MmVsYWpxenE1aDA2" target="_blank">
                <img src={Foto3} alt="pageI" />
                <i className="fab fa-instagram" />
                </a>
                </div>

                <div className="imgIS4">
                <a href="https://www.instagram.com/the_power_body?igsh=MmVsYWpxenE1aDA2" target="_blank">
                <img src={Foto4} alt="pageI" />
                <i className="fab fa-instagram" />
                </a>
                </div>

            </div>
        </div>
    )
}

