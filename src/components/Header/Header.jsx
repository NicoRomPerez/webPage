import React from "react";
// import nicofondoBlanco from "../../assets/nicofondoBlanco.png";
// import heronico from "../../assets/heronico.png"
import "../../components/Header/Header.css"
import { HashLink } from 'react-router-hash-link';
// import { Link as LinkScroll } from "react-scroll/modules";

export default function Header() {
  const rutas = ["Home", "Portfolio", "AboutMe", "Contact"];

  const listItems = rutas.map((ele) => (
    <li>
      <HashLink activeClass="active" to={`/#${ele}`}>{ele}</HashLink>
    </li>
  ));

  return (
    <>
      <div class="header">

        <div class="varela-round-regular logo">
          <h1>Ni</h1>
          <h2>
            NICOLAS
            <br />
            ROMERO
          </h2>
          <label>software developer</label>
        </div>
        <div  class="menu">
          <ul class="varela-round-regular">{listItems}</ul>
        </div>
      </div>
    </>
  );
}
