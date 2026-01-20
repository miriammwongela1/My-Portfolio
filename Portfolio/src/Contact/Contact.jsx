import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submit button clicked!");

  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(false);
      }, 3000);
    } else {
      alert("Failed to send message");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};


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
          {/* Contact Form */}
          <motion.div
            className={styles.formContainer}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows="6"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`${styles.submitBtn} btn btn-primary`}
                disabled={submitted}
              >
                {submitted ? "Message Sent! ✓" : "Send Message"}
              </button>
            </form>
          </motion.div>

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
                href="/Miriam_Mwongela_CV.pdf"
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
