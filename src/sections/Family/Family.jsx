import { useState, useEffect, useRef } from "react";
import styles from "./Family.module.css";
import BackdropTitle from "../../components/BackdropTitle/BackdropTitle";
import img1 from "../../assets/images/family/1.jpg";
import img2 from "../../assets/images/family/2.jpg";
import img3 from "../../assets/images/family/3.jpg";
import img4 from "../../assets/images/family/4.jpg";

const baseImages = [img1, img2, img3, img4];

const Family = () => {
  const [images, setImages] = useState([...baseImages, ...baseImages]);
  const observerTarget = useRef(null);

  useEffect(() => {
    const currentTarget = observerTarget.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setImages((prevImages) => [...prevImages, ...baseImages]);
        }
      },
      {
        root: null,
        rootMargin: "0px 200px 0px 0px",
        threshold: 0.1,
      }
    );

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);

  return (
    <section className={styles.family}>
      <header className={`${styles['family-header']} container`}>
        <BackdropTitle dataTitle="Part" className="title-big centered">
          Be a part of our fit family
        </BackdropTitle>
        <div className={`${styles['family-description']} section-description`}>
          <p>Training helps you think and feel better. join us!</p>
        </div>
      </header>
      
      <div className={`${styles['family-body']} container-wide`}>
        {images.map((img, index) => (
          <img 
            key={index} 
            className={styles['family-image']} 
            src={img} 
            alt="Training session" 
            loading="lazy" 
          />
        ))}
        <div ref={observerTarget} style={{ width: 1, flexShrink: 0 }}></div>
      </div>
    </section>
  );
};

export default Family;