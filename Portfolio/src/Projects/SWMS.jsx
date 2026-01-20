import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./SWMS.module.css";
import { Link } from "react-router-dom";

export default function SWMS() {
  const [expandedSection, setExpandedSection] = useState("overview");

  const projectHighlights = [
    { icon: "📊", title: "Real-time Tracking", description: "Live inventory updates after each transaction" },
    { icon: "⏰", title: "Expiry Alerts", description: "Automatic notifications for expiring products" },
    { icon: "📈", title: "Smart Reports", description: "Instant, data-driven insights for managers" },
    { icon: "🔒", title: "Access Control", description: "Role-based permissions for staff and managers" }
  ];

  const currentIssues = [
    "Inventory management challenges leading to inaccurate stock levels",
    "Expired inventory accumulation causing financial losses",
    "Empty aisles from understocking impacting customer satisfaction",
    "Manual tracking processes prone to human error"
  ];

  const systemFeatures = [
    "Real-time item tracking with instant stock updates",
    "Automated alerts for expiring and expired products",
    "Generate comprehensive, up-to-date reports",
    "User login and access control with role-based permissions",
    "Seamless POS system integration via RESTful APIs"
  ];

  const specificObjectives = [
    {
      title: "Product Expiry Management",
      description: "Remind the team when products are close to expiring so they can act in time, reducing waste and keeping customers supplied with fresh items."
    },
    {
      title: "Stock Level Management",
      description: "Alert staff when stock is running low, helping them restock before shelves go empty and customers miss what they need."
    },
    {
      title: "Data-Driven Reporting",
      description: "Share clear reports instantly, turning warehouse data into easy updates that managers can rely on to make good decisions."
    }
  ];

  const goals = [
    "Reduce the accumulation of expired products by 80%",
    "Minimize financial losses from waste and inefficiency",
    "Reduce health risks to customers through better food safety",
    "Ensure compliance with Kenya's food safety regulations"
  ];

  const functionalRequirements = [
    {
      requirement: "Real-time Stock Updates",
      description: "The system updates stock levels right away after each sale, so inventory records stay accurate."
    },
    {
      requirement: "Expiry Tracking & Alerts",
      description: "It keeps an eye on product expiry dates and sends alerts when items are close to expiring, making it easier to remove or discount them in time."
    },
    {
      requirement: "Reporting Features",
      description: "The system gives instant reports, including sales summaries, current stock levels, and lists of expired or removed items."
    },
    {
      requirement: "User Login & Access Control",
      description: "Staff and managers log in with different access rights: managers can see reports and change settings, while staff focus on updating inventory and checking expiry dates."
    },
    {
      requirement: "POS Integration",
      description: "It connects smoothly with POS systems through RESTful APIs, so every sale is reflected immediately in the warehouse database."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Hero Section */}
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>Smart Warehouse Management System</h1>
          <div className={styles.badges}>
            <span className={styles.badge}>Final Year Project</span>
            <span className={styles.badge}>In Progress</span>
            <span className={styles.badge}>Kenya</span>
          </div>
          <p className={styles.subtitle}>
            An enterprise-level inventory management system designed to revolutionize supermarket warehouse operations
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/SWMS.png" alt="Smart Warehouse Management System" />
        </motion.div>

        {/* Highlights */}
        <motion.div
          className={styles.highlights}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {projectHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              className={styles.highlight}
              whileHover={{ y: -8 }}
            >
              <div className={styles.icon}>{highlight.icon}</div>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Sections */}
        <div className={styles.sectionsContainer}>
          {/* Current Issues */}
          <motion.section
            className={styles.contentSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className={styles.sectionTitle}>🔴 Current Issues in Supermarkets</h2>
            <p className={styles.sectionDescription}>
              Supermarkets face significant challenges in managing inventory and warehouse operations:
            </p>
            <ul className={styles.list}>
              {currentIssues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          </motion.section>

          {/* System Features */}
          <motion.section
            className={styles.contentSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>⚙️ System Features</h2>
            <p className={styles.sectionDescription}>
              SWMS provides comprehensive features designed to address warehouse management challenges:
            </p>
            <ul className={styles.list}>
              {systemFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.section>

          {/* Specific Objectives */}
          <motion.section
            className={styles.contentSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h2 className={styles.sectionTitle}>🎯 Specific Objectives</h2>
            <div className={styles.objectivesGrid}>
              {specificObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  className={styles.objectiveCard}
                  whileHover={{ y: -5 }}
                >
                  <h3>{objective.title}</h3>
                  <p>{objective.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Goals */}
          <motion.section
            className={styles.contentSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>🎪 Project Goals</h2>
            <p className={styles.sectionDescription}>
              The primary goals of SWMS are to improve efficiency and reduce losses in supermarket operations:
            </p>
            <ul className={styles.list}>
              {goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </motion.section>

          {/* Project Scope */}
          <motion.section
            className={styles.contentSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2 className={styles.sectionTitle}>📍 Project Scope</h2>
            <div className={styles.scopeGrid}>
              <div className={styles.scopeItem}>
                <h4>Target Area</h4>
                <p>Big Supermarkets in Nairobi, Kenya</p>
              </div>
              <div className={styles.scopeItem}>
                <h4>Product Category</h4>
                <p>Food Products Only</p>
              </div>
              <div className={styles.scopeItem}>
                <h4>Store Type</h4>
                <p>Physical Retail Stores</p>
              </div>
              <div className={styles.scopeItem}>
                <h4>Methodology</h4>
                <p>Agile Development</p>
              </div>
            </div>
          </motion.section>

          {/* Functional Requirements */}
          <motion.section
            className={styles.contentSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className={styles.sectionTitle}>📋 Functional Requirements</h2>
            <div className={styles.requirementsTable}>
              {functionalRequirements.map((req, index) => (
                <motion.div
                  key={index}
                  className={styles.requirementRow}
                  whileHover={{ x: 5 }}
                >
                  <div className={styles.requirementNumber}>{index + 1}</div>
                  <div className={styles.requirementContent}>
                    <h4>{req.requirement}</h4>
                    <p>{req.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technology Stack */}
          <motion.section
            className={styles.contentSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <h2 className={styles.sectionTitle}>💻 Technology Stack</h2>
            <div className={styles.techStackGrid}>
              <div className={styles.techCategory}>
                <h4>Frontend</h4>
                <p>React, HTML5, CSS3, JavaScript</p>
              </div>
              <div className={styles.techCategory}>
                <h4>Backend</h4>
                <p>Node.js, Express.js, REST APIs</p>
              </div>
              <div className={styles.techCategory}>
                <h4>Database</h4>
                <p>MongoDB, NoSQL</p>
              </div>
              <div className={styles.techCategory}>
                <h4>Tools</h4>
                <p>Git, Postman, VS Code, Figma</p>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            className={styles.ctaSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2>Interested in Learning More?</h2>
            <p>This is an ongoing final year project showcasing real-world problem-solving and technical expertise.</p>
            <div className={styles.ctaButtons}> 

  <div className={styles.ctaButtons}>
  <Link to="/" className={`${styles.btn} ${styles.btnPrimary}`}>
    ← Back to Projects
  </Link>
  <Link to="/#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
    Get in Touch →
  </Link>
</div>

            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
