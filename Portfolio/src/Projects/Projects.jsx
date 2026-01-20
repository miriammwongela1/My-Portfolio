import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import javaIcon from "../assets/java.png";
import pythonIcon from "../assets/python.png";
import jsIcon from "../assets/javascript.png";
import reactIcon from "../assets/react.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import sqlIcon from "../assets/database.png";
import nodeIcon from "../assets/node.png";
import mongoIcon from "../assets/mdb.svg";
import gitIcon from "../assets/github.png";
import vscodeIcon from "../assets/vscode.png";
import figmaIcon from "../assets/figma.png";
import canvaIcon from "../assets/canva.webp";

// Certificate images
import cert1 from "../assets/cert1.JPG";
import cert2 from "../assets/cert2.JPG";
import badge1 from "../assets/cert3.JPG";
import award from "../assets/award.JPG";

import { Link } from "react-router-dom";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects");

  // Listen for hash changes to update active tab
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      
      if (hash.includes("skills")) {
        setActiveTab("skills");
      } else if (hash.includes("certificates")) {
        setActiveTab("certificates");
      } else {
        setActiveTab("projects");
      }
    };

    // Check initial hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const skillIcons = [
    { name: "Java", icon: javaIcon },
    { name: "Python", icon: pythonIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "SQL", icon: sqlIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "MongoDB", icon: mongoIcon },
    { name: "Git", icon: gitIcon },
    { name: "VS Code", icon: vscodeIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "Canva", icon: canvaIcon }
  ];

  const projects = [
    {
      title: "Smart Warehouse Management System",
      description: "Enterprise-level inventory management system that tracks products in real-time, generates detailed reports, and optimizes warehouse operations. Final year project for managing supermarket inventory with real-time expiry tracking and automated alerts.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "/SWMS.png",
      demo: "#",
      details: "/swms"
    }
  ];

  const certificates = [
    { image: cert1, title: "Certificate 1" },
    { image: cert2, title: "Certificate 2" },
    { image: badge1, title: "Online Badge" },
    { image: award, title: "Award" },
    { 
      title: "Introduction to IoT",
      org: "Cisco",
      bg: "/cisco-logo.jpg",
      link: "https://www.credly.com/badges/045baca8-60da-43dc-8328-86ab05c2a3df/public_url",
      issued: "Issued by Cisco",
      type: "badge"
    },
    { 
      title: "ICDL Certification", 
      org: "ICDL Global",
      bg: "/icdl-badge.png",
      link: "https://profile.icdlafrica.org/dd81d649-9ee4-452f-b97a-9a956a942038#acc.nZBFxPHe",
      issued: "Issued by ICDL Global",
      type: "badge"
    }
  ];

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Portfolio</h2>

        {/* Tab Navigation */}
        <div className={styles.tabs}>
          {["projects", "skills", "certificates"].map((tab) => (
            <motion.button
              key={tab}
              className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ""}`}
              onClick={() => {
                setActiveTab(tab);
                // Update the URL hash when clicking tab buttons
                window.location.hash = tab === "projects" ? "#projects" : `#${tab}`;
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Tab */}
        <motion.div
          key="projects"
          variants={tabVariants}
          initial="hidden"
          animate={activeTab === "projects" ? "visible" : "hidden"}
          transition={{ duration: 0.3 }}
          className={styles.tabContent}
        >
          {activeTab === "projects" && (
            <div className={styles.projectsGrid}>
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  className={styles.projectCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={styles.projectImage}>
                    <img src={project.image} alt={project.title} />
                    <div className={styles.overlay}>

                      <a
                      href={project.details} 
                      className={`${styles.btn} ${styles.btnSecondary}`} 
                      > 
                        Details 
                      </a>
                    </div>
                  </div>
                  <div className={styles.projectContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.techStack}>
                      {project.tech.map((tech, j) => (
                        <span key={j} className={styles.techBadge}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Skills Tab */}
        <motion.div
          key="skills"
          id="skills"
          variants={tabVariants}
          initial="hidden"
          animate={activeTab === "skills" ? "visible" : "hidden"}
          transition={{ duration: 0.3 }}
          className={styles.tabContent}
        >
          {activeTab === "skills" && (
            <div className={styles.skillsGrid}>
              {skillIcons.map((skill, i) => (
                <motion.div
                  key={i}
                  className={styles.skillIcon}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  title={skill.name}
                >
                  <img src={skill.icon} alt={skill.name} />
                  <p>{skill.name}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

       {/* Certificates Tab */}
<motion.div
  key="certificates"
  variants={tabVariants}
  initial="hidden"
  animate={activeTab === "certificates" ? "visible" : "hidden"}
  transition={{ duration: 0.3 }}
  className={styles.tabContent}
>
  {activeTab === "certificates" && (
    <div className={styles.certificatesGrid}>
      {certificates.map((cert, i) => (
        <motion.div
          key={i}
          className={`${styles.certCard} ${cert.type === "badge" ? styles.badge : ""}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.15 }}
          whileHover={{ scale: 1.05 }}
          style={cert.type === "badge" ? { backgroundImage: `url(${cert.bg})` } : {}}
        >
          {cert.type === "badge" ? (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certOverlay}
            >
              <h3>{cert.title}</h3>
              <p>{cert.issued}</p>
            </a>
          ) : (
            <img src={cert.image} alt={cert.title} />
          )}
        </motion.div>
      ))}
    </div>
  )}
</motion.div>

      </div>
    </section>
  );
}
