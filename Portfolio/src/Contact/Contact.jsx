import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/miriammwongela1", 
      icon: "🔗"
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/miriammwongela", 
      icon: "💼"
    },
    { 
      name: "Email", 
      href: "mailto:miriammwongela15@gmail.com", 
      icon: "✉️"
    }
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Let's collaborate on something amazing. Reach out anytime!
          </p>
        </motion.div>

        <div className={styles.content}>
          {/* Contact Info */}
          <motion.div
            className={styles.infoContainer}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className={styles.infoBox}>
              <h3>Connect With Me</h3>
              <p>
                I'm always interested in hearing about new projects and opportunities. 
                Feel free to reach out through any of the channels below.
              </p>

              <motion.a
                href="/Portfolio/Miriam_Mwongela_CV.pdf"
                download="Miriam_Mwongela_CV.pdf"
                className={`${styles.downloadBtn} btn btn-accent`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: 'inline-block', marginBottom: '20px' }}
              >
                📥 Download CV
              </motion.a>

              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={styles.icon}>{social.icon}</span>
                    <span className={styles.label}>{social.name}</span>
                  </motion.a>
                ))}
              </div>

              <div className={styles.contactDetails}>
                <div className={styles.detail}>
                  <span className={styles.label}>Email</span>
                  <a href="mailto:miriammwongela15@gmail.com">
                    miriammwongela15@gmail.com
                  </a>
                </div>
                <div className={styles.detail}>
                  <span className={styles.label}>Location</span>
                  <p>Kenya</p>
                </div>
                <div className={styles.detail}>
                  <span className={styles.label}>Response Time</span>
                  <p>24-48 hours</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
