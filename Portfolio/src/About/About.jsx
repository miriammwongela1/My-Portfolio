import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import profilepic from "../assets/1.PNG";

export default function About() {
  const cardRef = useRef(null);
  const photoRef = useRef(null);
  const [cardVisible, setCardVisible] = useState(false);
  const [photoVisible, setPhotoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target === cardRef.current) setCardVisible(entry.isIntersecting);
        if (entry.target === photoRef.current) setPhotoVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    if (photoRef.current) observer.observe(photoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        
        {/* Photo side */}
        <div
          ref={photoRef}
          className={`${styles.photoWrapper} ${photoVisible ? styles.showPhoto : ""}`}
        >
          <img src={profilepic} alt="Miriam Mwongela" className={styles.profilePhoto} />
        </div>

        {/* Text side */}
        <div
          ref={cardRef}
          className={`${styles.aboutCard} ${cardVisible ? styles.showCard : ""}`}
        >
          <h2>About Me ✨</h2>
          <p>
            I’m Miriam Mwongela, a software developer and aspiring AI Engineer.  
            I thrive on building intelligent, user‑friendly solutions that bridge creativity and technology.  
            With expertise in Java, Python, JavaScript, React, HTML, CSS, and SQL, I design applications that are practical, reliable, and scalable.  
            My passion lies in exploring emerging technologies, solving challenges, and creating projects that make a positive impact in education, healthcare, and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
