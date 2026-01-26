import styles from './TrainingTypes.module.css';
import icon1 from '../../assets/images/training-types/1.svg';
import icon2 from '../../assets/images/training-types/2.svg';
import icon3 from '../../assets/images/training-types/3.svg';
import icon4 from '../../assets/images/training-types/4.svg';
import icon5 from '../../assets/images/training-types/5.svg';
import icon6 from '../../assets/images/training-types/6.svg';

const types = [
  { id: 1, title: 'Maxpump', img: icon1 },
  { id: 2, title: 'Aron gym', img: icon2 },
  { id: 3, title: 'Fit & tone', img: icon3 },
  { id: 4, title: 'Forza', img: icon4 },
  { id: 5, title: 'Balance fitness', img: icon5 },
  { id: 6, title: 'Body sculpt', img: icon6 },
];

const TrainingTypes = () => (
  <section className={`${styles['training-types']} container-wide`}>
    <h2 className="visually-hidden">Types of training</h2>
    <ul className={styles['training-types-list']}>
      {types.map(type => (
        <li key={type.id} className={styles['training-types-item']}>
          <img className={styles['training-types-image']} src={type.img} alt={type.title} width="150" height="140" />
          <h3 className={styles['training-types-item-title']}>{type.title}</h3>
        </li>
      ))}
    </ul>
  </section>
);

export default TrainingTypes;