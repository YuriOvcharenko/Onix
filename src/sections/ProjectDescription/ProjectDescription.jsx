import styles from './ProjectDescription.module.css';
import BackdropTitle from '../../components/BackdropTitle/BackdropTitle';

const ProjectDescription = () => {
  return (
    <section className={styles.description}>
      <div className="container">
        <header className={styles['description-header']}>
          <BackdropTitle dataTitle="Info" className="title-medium centered">
            Who we are
          </BackdropTitle>
        </header>
        
        <div className={styles['description-content']}>
          <p>
            Kropp Fitness is a premium fitness club designed to help you reach your 
            peak physical potential. Whether you are a beginner or a pro athlete, 
            our club offers a wide range of training programs including CrossFit, 
            functional training, and individual coaching to suit your specific goals.
          </p>
          <p>
            We believe in building a strong community where motivation meets discipline. 
            Our modern facility provides the best environment to challenge yourself, 
            transform your body, and strengthen your mind. Join us today and become 
            part of the movement that inspires success and healthy living.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;