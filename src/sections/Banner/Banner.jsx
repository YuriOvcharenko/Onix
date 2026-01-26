import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <h2 className="visually-hidden">Upcoming events</h2>
      <div className={styles['banner-body']}>
        <div className={styles['banner-info']}>
          New event<br/>
          coming up / <time dateTime="06-07">june 7</time>&nbsp;-&nbsp;<time dateTime="06-13">13</time>
        </div>
        <h3 className={styles['banner-title']}>Crossfit</h3>
      </div>
      <div className={styles['banner-pagination']}>
        <ul className={styles['banner-pagination-list']}>
          {[1, 2, 3].map((item, index) => (
            <li key={item} className={styles['banner-pagination-item']}>
              <button 
                className={`${styles['banner-pagination-button']} ${index === 2 ? styles['is-current'] : ''}`} 
                type="button"
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Banner;