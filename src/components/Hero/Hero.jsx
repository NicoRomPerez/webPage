import React from "react";
import "../../components/Hero/Hero.css";

export default function Hero(params) {
  return (
    <>
      <div class="container" id="section1">
        <div class="heronico">
          <h1>
            Hello! <b>I am Nicolas Romero</b>, a lover of technology and
            <b> passionate</b> about learning.
          </h1>
          {/* <p class="varela-round-regular">Software developer specialized in Front-end, technologist in ADSI (Technologist in analysis and development of information systems).</p > */}
          <p class="varela-round-regular">Front-end software developer, ADSI (Analysis and Development of Information Systems) technologist, with experience in creating dynamic, reusable and scalable interfaces, focused on offering innovative and high-impact solutions.</p >
          <a href="#" class="btn btn-light topmargin-sm">
            Explore now <ion-icon name="play-circle-outline"></ion-icon>
          </a>
        </div>
      </div>
    </>
  );
}
