
import "./InfoCard.css"
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { PiCodeFill } from "react-icons/pi";
import { SiFrontendmentor } from "react-icons/si";
import { SiCodepen } from "react-icons/si";
import { IoMdAnalytics } from "react-icons/io";
import { TbDatabaseCog } from "react-icons/tb";
import { FaServer } from "react-icons/fa";


export default function InfoCard(props) {

  return (
    <>
      <div class="infoCard">
      <aside>

        {
          props.titulo == "Frontend Dev Jr" ? <PiCodeFill size={50} /> : <></> 
        }
        {
          props.titulo == "Full Stack Dev Jr" ? <SiCodepen size={50} /> : <></> 
        }
        {
          props.titulo == "Backend Dev Jr" ? <SiFrontendmentor size={50} /> : <></>
        }
        {
          props.titulo == "Analista de QA Jr" ? <IoMdAnalytics size={50} /> : <></>
        }
        {
          props.titulo == "Analista de Bases de Datos Jr" ? <TbDatabaseCog size={50} /> : <></>
        }
        {
          props.titulo == "Analista Jr de Infraestructura" ? <FaServer size={50} /> : <></>
        }
        
        {/* <a href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjr7fK-yOWLAxV1VTABHeIOPAYQPAgI"> */}
        {/* </a> */}
            <h2>{props.titulo}</h2>
            <p class="info varela-round-regular">{props.texto}</p>
        </aside>
      </div>
    </>
  );
}
