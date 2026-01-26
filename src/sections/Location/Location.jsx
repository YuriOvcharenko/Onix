import styles from './Location.module.css';
import Button from '../../components/Button/Button';
import BackdropTitle from '../../components/BackdropTitle/BackdropTitle';
import mapImg from '../../assets/images/map.jpg';

const Location = () => {
  return (
    <section className={`${styles.location} container-wide`}>
      <img
        className={styles['location-map-image']}
        src={mapImg}
        alt="Branches on the map"
        width="960" 
        height="600" 
        loading="lazy"
      />
      <div className={styles['location-body']}>
        <BackdropTitle 
          dataTitle="Look" 
          centered 
          className={`${styles['location-title']} title-medium`}
        >
          Find us near you
        </BackdropTitle>

        <div className={styles['location-description']}>
          <p>
            Nec suas signiferumque id. An eum labore commodo principes. 
            Usu diam noluisse cu, nam adipisci
          </p>
        </div>

        <Button 
          variant="transparent" 
          href="/" 
          className={styles['location-button']}
        >
          View more
        </Button>
      </div>
    </section>
  );
};

export default Location;