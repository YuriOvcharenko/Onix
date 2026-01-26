import './Location.css';
import Button from '../../components/Button/Button';
import BackdropTitle from '../../components/BackdropTitle/BackdropTitle';
import mapImg from '../../assets/images/map.jpg';

const Location = () => {
  return (
    <section className="location container-wide">
      <img
        className="location-map-image"
        src={mapImg}
        alt="Branches on the map"
        width="960" 
        height="600" 
        loading="lazy"
      />
      <div className="location-body">
        <BackdropTitle 
          dataTitle="Look" 
          centered 
          className="location-title title-medium"
          Tag="h2"
        >
          Find us near you
        </BackdropTitle>

        <div className="location-description">
          <p>
            Nec suas signiferumque id. An eum labore commodo principes. 
            Usu diam noluisse cu, nam adipisci
          </p>
        </div>

        <Button 
          variant="transparent" 
          href="/" 
          className="location-button"
        >
          View more
        </Button>
      </div>
    </section>
  );
};

export default Location;