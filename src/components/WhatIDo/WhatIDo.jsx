import infoCv from "../../infoCv/infoCv.json";
import InfoCard from "../../components/InfoCard/InfoCard";

export default function WhatIDo(props) {
  const skills = infoCv.skills;

  const renderSkillCard = skills.map((element, index) => (
    <InfoCard titulo={element.title} texto={element.description}></InfoCard>
  ));

  return (
    <>
      <div>
        <label>
          <h1 class="title">{props.title}</h1>
          <b>{props.subtitle}</b>
          <p class="varela-round-regular">
            {props.text}
          </p>
        </label>
        <div>
        {renderSkillCard}
        </div>
      </div>
    </>
  );
}
