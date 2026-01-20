import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={styles.header}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logoLink}>
          <motion.div 
            className={styles.logoContainer}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logo.png" alt="Logo" className={styles.logoImg} />
            <h1 className={styles.logo}>
              Miriam<span>Dev</span>
            </h1>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navDesktop}>
           {navItems.map((item) => (
              <HashLink
                 key={item.label}
                 smooth
                 to={item.href}
                 className={styles.navLink}
                 onClick={() => setMenuOpen(false)}
      >
             {item.label}
                </HashLink>
             ))}
  <a 
    href="/Miriam_Mwongela_CV.pdf"
    download="Miriam_Mwongela_CV.pdf"
    className={styles.cvBtn}
  >
    Download CV
  </a>
</div>


        {/* Mobile Menu Button */}
        <button 
          className={`${styles.menuBtn} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
  <motion.div 
    className={styles.navMobile}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    {navItems.map((item) => (
      <HashLink
        key={item.label}
        smooth
        to={item.href}
        className={styles.navLink}
        onClick={() => setMenuOpen(false)}
      >
        {item.label}
      </HashLink>
    ))}
    <a 
      href="/Miriam_Mwongela_CV.pdf"
      download="Miriam_Mwongela_CV.pdf"
      className={styles.cvBtn}
    >
      Download CV
    </a>
  </motion.div>
)}
      </nav>


      {/* Hero Content */}
      <motion.div 
        className={styles.heroContent}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h1 
          className={styles.heroTitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Hello, I'm <span className={styles.accent}>Miriam Mwongela</span>
        </motion.h1>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Software Developer | Aspiring AI Engineer
        </motion.p>
        
        <motion.p 
          className={styles.summary}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          I craft intelligent, user-friendly solutions with Java, Python, JavaScript, React, HTML, CSS, and SQL.
        </motion.p>

        <motion.div 
          className={styles.heroButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          
  <HashLink smooth to="/#projects" className={`${styles.primaryBtn} btn btn-primary`}>
    View My Work
  </HashLink>
  <HashLink smooth to="/#contact" className={`${styles.secondaryBtn} btn btn-secondary`}>
    Let's Connect
  </HashLink>
</motion.div>


      {/* Scroll Indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
      </motion.div>
      
    </header>
  );
}
