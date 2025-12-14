import React from "react";
import items from "../data/data.json";
import { GoArrowRight } from "react-icons/go";
import '../css/SkillsSection.css'

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="skills-text">
        <h2>Learn essential career and life skills</h2>
        <p>
          Mdemy helps you build in-demand skills fast and advance your career
          in a changing job market.
        </p>
      </div>

      <div className="skills-cards">
        {items.map((item) => (
          <div className="skills-card" key={item.title}>
            <div className="skills-card-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="skills-card-body">
              <span className="skills-learners">👥 {item.users}</span>
              <h3>{item.title}</h3>
              <GoArrowRight  className="rightArrow-icon"/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
