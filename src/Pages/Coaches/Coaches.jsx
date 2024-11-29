import "../../Styles/CoachesST/CoachesST.css";
import Anderson from "../../assets/Coachs/Anderson.jpeg"
import Lucas from "../../assets/Coachs/Lucas.jpeg";

export default function Coaches(){
    return(
        <div className="Coachs">
            <h1>Personais</h1>

            <div className="imagems-Personais">

                <div className="img1">
                <img src={Lucas} alt="Lucas" />
                    <section className="Infors">
                        <h1>Lucas</h1>
                        <p>Sou Lucas, personal trainer, e vou te ajudar a alcançar seus objetivos com treinos personalizados. Vamos juntos superar desafios e transformar seu corpo de forma saudável e eficiente!</p>
                        <div className="icones_Atletas">
                        <a href="https://www.instagram.com/lucaas99.20?igsh=ZmU2MTBtZG9jYTNu" target="_blank"><i className="fab fa-instagram" /></a>
                        </div>
                    </section>
                </div>

                <div className="img2">
                <img src={Anderson} alt="Anderson" />
                    <section className="Infors">
                        <h1>Anderson Rocha</h1>
                        <p>Sou Anderson Rocha, personal trainer, e vou transformar sua vida com treinos personalizados. Juntos, vamos superar limites e alcançar seus objetivos de forma saudável!</p>
                        <div className="icones_Atletas">
                        <a href="https://www.instagram.com/ansu_rocha?igsh=MTYwbDM0MWU4bG9wbg==" target="_blank"><i className="fab fa-instagram" /></a>
                        </div>
                    </section>
                </div>
 
            </div>
        </div>
    )
}