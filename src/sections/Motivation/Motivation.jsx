import styles from './Motivation.module.css';
import Button from '../../components/Button/Button';
import motivation1 from '../../assets/images/motivation/1.jpg';
import motivation2 from '../../assets/images/motivation/2.jpg';
import BackdropTitle from '../../components/BackdropTitle/BackdropTitle';

const motivationItems = [
  {
    id: 1,
    title: "Be you, just stronger! Power is in you",
    backdrop: "Strong",
    description: "Unum solum justo ex ius. Pro cu probo laboramus eius insolens euripidis te eos, ut agam tota.",
    image: motivation1,
    alt: "A man pulling himself up on a horizontal bar"
  },
  {
    id: 2,
    title: "Today is the best day to start!",
    backdrop: "Start",
    description: "Sed abhorreant constituam consectetuer eu. At mei clita deserunt, his movet molestie nemore.",
    image: motivation2,
    alt: "Man with dumbbells"
  }
];

const Motivation = () => {
  return (
    <section className={styles.motivation}>
      <h2 className="visually-hidden">Motivation</h2>
      <ul className={styles['motivation-list']}>
        {motivationItems.map((item) => (
          <li key={item.id} className={styles['motivation-item']}>
            <div className={`${styles['motivation-card']} container`}>
              <div className={styles['motivation-card-body']}>
                <BackdropTitle 
                  dataTitle={item.backdrop} 
                  className={`${styles['motivation-card-title']} title-medium`}
                >
                  {item.title}
                </BackdropTitle>
                
                <div className={styles['motivation-card-description']}>
                  <p>{item.description}</p>
                </div>
                <Button variant="transparent" href="/">View more</Button>
              </div>
              <img
                className={styles['motivation-card-image']}
                src={item.image}
                alt={item.alt}
                width="518" height="760" loading="lazy"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Motivation;