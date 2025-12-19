import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input'; 
import BackdropTitle from '../../components/BackdropTitle/BackdropTitle';
import videoPlaceholder from '../../assets/images/video-placeholder.jpg';

const JoinUs = () => {
  return (
    <section className="join-us">
      <div className="join-us-video-wrapper">
        <div className="join-us-video-container">
          <img 
            className="join-us-video-poster" 
            src={videoPlaceholder} 
            alt="Motivation" 
          />
          <button className="join-us-video-play-button" type="button">
            Play
          </button>
        </div>
      </div>

      <div className="join-us-body container">
        <h2 className="join-us-title">Join us</h2>
        
        <form className="join-us-form">
          <header className="join-us-form-header">
            <BackdropTitle dataTitle="Go!" centered className="title-big">
              Start here
            </BackdropTitle>
            <div className="join-us-form-subtitle section-description">
              fill the form below to start your journey
            </div>
          </header>

          <div className="join-us-form-body">
            <Input 
              className="join-us-form-input" 
              id="name" 
              placeholder="Name" 
            />
            <Input 
              className="join-us-form-input" 
              id="email" 
              placeholder="Email" 
              type="email" 
            />
            <Button 
              className="join-us-form-button" 
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