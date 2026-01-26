import "./Family.css";
import BackdropTitle from "../../components/BackdropTitle/BackdropTitle";
import img1 from "../../assets/images/family/1.jpg";
import img2 from "../../assets/images/family/2.jpg";
import img3 from "../../assets/images/family/3.jpg";
import img4 from "../../assets/images/family/4.jpg";
import img5 from "../../assets/images/family/5.jpg";

const Family = () => {
  return (
    <section className="family">
      <header className="family-header container">
        <BackdropTitle dataTitle="Part" className="title-big centered">
          Be a part of our fit family
        </BackdropTitle>
        <div className="family-description section-description">
          <p>Training helps you think and feel better. join us!</p>
        </div>
      </header>
      <div className="family-body container-wide">
        {[img1, img2, img3, img4, img5].map((img, index) => (
          <img 
            key={index} 
            className="family-image" 
            src={img} 
            alt="Training session" 
            loading="lazy" 
          />
        ))}
      </div>
    </section>
  );
};

export default Family;