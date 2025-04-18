import React from "react";
import "./ProfilCard.css";
import heronico from "../../assets/heronico.png";
// import { FaLinkedin, FaFacebook, FaGithubSquare, FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineLocationCity } from "react-icons/md";
import infoCv from "../../infoCv/infoCv.json"




export default function ProfilCard() {
  const profilCardInfo = {
    imagen: { heronico },
    nombre: "Nicolas Romero",
    profesion: "software developer",
    direccion: "Ibagué - Colombia",
    telefono: "+573204606192",
    correo: "nicolas28romero@gmail.com",
  };


  return (
    <>
      <div class="ProfilCard">
        <figure>
          <img src={heronico}/>
        </figure>
        <div class="info">
          <h2>{infoCv.personal_info.full_name}</h2>
          <label>{profilCardInfo.profesion}</label>
          <ul class="contactList">
            <li>
              <div class="con">
                <FaSquarePhone size={30}/>
              </div>
              <div class="cont">
                <h3>Telefono</h3>
                <label>{infoCv.personal_info.mobile}</label>
              </div>
            </li>
            <li>
              <div class="con">
                <MdEmail size={30}/>
              </div>
              <div class="cont">
                <h3>Email</h3>
                <label>{infoCv.personal_info.email}</label>
              </div>
            </li>
            <li>
              <div class="con">
                <MdOutlineLocationCity size={30}/>
              </div>
              <div class="cont">
                <h3>Dirección</h3>
                <label>{profilCardInfo.direccion}</label>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
}
