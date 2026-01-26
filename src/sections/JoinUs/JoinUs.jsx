import styles from './JoinUs.module.css';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input'; 
import BackdropTitle from '../../components/BackdropTitle/BackdropTitle';
import videoPlaceholder from '../../assets/images/video-placeholder.jpg';

const JoinUs = () => {
  return (
    <section className={styles['join-us']}>
      <div className={styles['join-us-video-wrapper']}>
        <div className={styles['join-us-video-container']}>
          <img 
            className={styles['join-us-video-poster']} 
            src={videoPlaceholder} 
            alt="Motivation" 
          />
          <button className={styles['join-us-video-play-button']} type="button">
            Play
          </button>
        </div>
      </div>

      <div className={`${styles['join-us-body']} container`}>
        <h2 className={styles['join-us-title']}>Join us</h2>
        
        <form className={styles['join-us-form']}>
          <header className={styles['join-us-form-header']}>
            <BackdropTitle dataTitle="Go!" centered className="title-big">
              Start here
            </BackdropTitle>
            <div className={`${styles['join-us-form-subtitle']} section-description`}>
              fill the form below to start your journey
            </div>
          </header>

          <div className={styles['join-us-form-body']}>
            <Input 
              className={styles['join-us-form-input']} 
              id="name" 
              placeholder="Name" 
            />
            <Input 
              className={styles['join-us-form-input']} 
              id="email" 
              placeholder="Email" 
              type="email" 
            />
            <Button 
              className={styles['join-us-form-button']} 
              variant="transparent" 
              type="submit"
            >
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;