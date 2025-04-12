import infoCv from "../../infoCv/infoCv.json";
import InfoCard from "../../components/InfoCard/InfoCard";

export default function WhatIDo() {
  const skills = infoCv.skills;

  const renderSkillCard = skills.map((element, index) => (
    <InfoCard titulo={element.title} texto={element.description}></InfoCard>
  ));

  return (
    <>
      <div>
        {renderSkillCard}
      </div>
    </>
  );
}
