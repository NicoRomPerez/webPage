import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import ProfilCard from "../../components/ProfilCard/ProfilCard";
import whatIdo from "../../components/WhatIDo/WhatIDo";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./Home.css";
import InfoCard from "../../components/InfoCard/InfoCard";
import WhatIDo from "../../components/WhatIDo/WhatIDo";
import Tape from "../../components/Tape/Tape";

export default function Home() {
  return (
    <>
      <div class="body">
        <Header></Header>
        <div class="hero">
          <section>
            <Hero></Hero>
            <div class="socialMediaList">
              <label>
                <b>Follow Me</b>
              </label>
              <ul>
                <li>
                  <a href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjr7fK-yOWLAxV1VTABHeIOPAYQPAgI">
                    <FaLinkedin size={30} />
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjr7fK-yOWLAxV1VTABHeIOPAYQPAgI">
                    <FaFacebook size={30} />
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjr7fK-yOWLAxV1VTABHeIOPAYQPAgI">
                    <FaInstagram size={30} />
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwjr7fK-yOWLAxV1VTABHeIOPAYQPAgI">
                    <IoLogoGithub size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <aside>
            <ProfilCard></ProfilCard>
          </aside>
        </div>
        <div class="tape">
          <Tape></Tape>
        </div>
        <div class="aboutMe" id="AboutMe">
          <WhatIDo
            title="About Me"
            subtitle="Dev perfil"
            text="Front-end software developer, ADSI (Analysis and Development of Information Systems) technologist, with experience in creating dynamic, reusable and scalable interfaces, focused on offering innovative and high-impact solutions."
          ></WhatIDo>
        </div>
        <div class="mySkills">
          <WhatIDo
            title="My skills"
            subtitle="Dev perfil"
            text="Front-end software developer, ADSI (Analysis and Development of Information Systems) technologist, with experience in creating dynamic, reusable and scalable interfaces, focused on offering innovative and high-impact solutions."
          ></WhatIDo>
        </div>
        <div class="services">
          <WhatIDo
            title="My tecnologias"
            subtitle="Dev perfil"
            text="Front-end software developer, ADSI (Analysis and Development of Information Systems) technologist, with experience in creating dynamic, reusable and scalable interfaces, focused on offering innovative and high-impact solutions."
          ></WhatIDo>
        </div>
      </div>
    </>
  );
}
