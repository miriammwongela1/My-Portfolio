import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";

// Skill icons from public folder
const javaIcon = "/My-Portfolio/java.png";
const pythonIcon = "/My-Portfolio/python.png";
const jsIcon = "/My-Portfolio/javascript.png";
const reactIcon = "/My-Portfolio/react.png";
const htmlIcon = "/My-Portfolio/html.png";
const cssIcon = "/My-Portfolio/css.png";
const sqlIcon = "/My-Portfolio/database.png";
const nodeIcon = "/My-Portfolio/node.png";
const mongoIcon = "/My-Portfolio/mdb.svg";
const gitIcon = "/My-Portfolio/github.png";
const vscodeIcon = "/My-Portfolio/vscode.png";
const figmaIcon = "/My-Portfolio/figma.png";
const canvaIcon = "/My-Portfolio/canva.webp";

// Certificate images from public folder
const cert1 = "/My-Portfolio/cert1.JPG";
const cert2 = "/My-Portfolio/cert2.JPG";
const badge1 = "/My-Portfolio/cert3.JPG";
const award = "/My-Portfolio/award.JPG";

// Project image from public folder
const swmsImage = "/My-Portfolio/SWMS.png";

// External logos from public folder
const ciscoLogo = "/My-Portfolio/cisco-logo.jpg"; 
const icdlBadge = "/My-Portfolio/icdl-badge.png";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects");

  // Listen for hash changes to update active tab
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("#skills")) {
        setActiveTab("skills");
      } else if (hash.includes("#certificates")) {
        setActiveTab("certificates");
      } else {
        setActiveTab("projects");
      }
    };
    handleHashChange();
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
      description:
        "Enterprise-level inventory management system with real-time expiry tracking and automated alerts.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: swmsImage,
      demo: "#",
      details: "/swms" // ✅ real route
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
      bg: ciscoLogo,
      link: "https://www.credly.com/badges/045baca8-60da-43dc-8328-86ab05c2a3df/public_url",
      issued: "Issued by Cisco",
      type: "badge"
    },
    {
      title: "ICDL Certification",
      org: "ICDL Global",
      bg: icdlBadge,
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
              className={`${styles.tabBtn} ${
                activeTab === tab ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <motion.div
            key="projects"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
            className={styles.tabContent}
          >
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
                      <Link
                        to={project.details}
                        className={`${styles.btn} ${styles.btnSecondary}`}
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                  <div className={styles.projectContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.techStack}>
                      {project.tech.map((tech, j) => (
                        <span key={j} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <motion.div
            key="skills"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
            className={styles.tabContent}
            id="skills"
          >
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
          </motion.div>
        )}

        {/* Certificates Tab */}
        {activeTab === "certificates" && (
          <motion.div
            key="certificates"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
            className={styles.tabContent}
            id="certificates"
          >
            <div className={styles.certificatesGrid}>
              {certificates.map((cert, i) => (
                <motion.div
                  key={i}
                  className={`${styles.certCard} ${
                    cert.type === "badge" ? styles.badge : ""
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  style={
                    cert.type === "badge"
                      ? { backgroundImage: `url(${cert.bg})` }
                      : {}
                  }
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
          </motion.div>
        )}
      </div>
    </section>
  );
}
