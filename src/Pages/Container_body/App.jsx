import "../../Styles/Container_bodyST/App.css";

// todo: importando paginas
import Cabecario from "../Cabecario/Cabecario";
import Home from "../Home/Home";
import Programas from "../Programas/Programas";
import Coachs from "../Coaches/Coaches";
import Instagram from "../Intagran/Instagram";
import Contatos from "../Contatos/Contatos";


export default function App() {

  return (
    <div className="Container_Principal">
      <Cabecario/>
      <Home/>
      <Programas/>
      <Coachs/>
      <Instagram/>
      <Contatos/>
    </div>
  )
}


