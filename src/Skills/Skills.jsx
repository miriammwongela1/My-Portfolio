import React, { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";

export default function Skills() {
  const skillsRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript", "SQL"],
    "Frontend Development": ["React", "HTML", "CSS"],
    "Backend & Databases": ["Node.js", "Express.js", "MongoDB"],
    "Tools & Platforms": ["Git & GitHub", "VS Code", "Figma", "Canva"],
    "Core CS Concepts": ["OOP", "SDLC", "Data Structures & Algorithms"]
  };

  return (
    <section id="skills" className={styles.skillsSection} ref={skillsRef}>
      <h2 className={styles.heading}>⚡ Technical Skills</h2>
      <div className={`${styles.skillsGrid} ${visible ? styles.show : ""}`}>
        {Object.entries(skills).map(([category, items], i) => (
          <div key={i} className={styles.skillCard}>
            <h3>{category}</h3>
            <ul>
              {items.map((skill, j) => (
                <li key={j}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
