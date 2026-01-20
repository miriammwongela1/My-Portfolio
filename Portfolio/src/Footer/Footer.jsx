import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/miriammwongela1", icon: "🔗" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/miriammwongela", icon: "💼" },
    { label: "Email", href: "mailto:miriammwongela15@gmail.com", icon: "✉️" }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Content Grid */}
        <div className={styles.content}>
          {/* Branding */}
          <motion.div
            className={styles.brand}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.brandContent}>
              <img src="/logo.png" alt="Logo" className={styles.footerLogoImg} />
              <h3>Miriam<span>Dev</span></h3>
            </div>
            <p>
              Building modern, scalable solutions with creativity and technical excellence.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className={styles.links}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul>
  {quickLinks.map((link) => (
    <li key={link.label}>
      <HashLink
        smooth
        to={`/${link.href}`}   // <-- changed here
        className={styles.navLink}
      >
        {link.label}
      </HashLink>
    </li>
  ))}
</ul>

          </motion.div>

          {/* Social Links */}
          <motion.div
            className={styles.social}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Connect</h4>
            <div className={styles.socialIcons}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom */}
        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {currentYear} Miriam Mwongela. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className={styles.scrollTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        title="Scroll to top"
      >
        ↑
      </motion.button>
    </footer>
  );
}
