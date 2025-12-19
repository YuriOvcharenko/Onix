import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <h2 className="visually-hidden">Upcoming events</h2>
      <div className="banner-body">
        <div className="banner-info">
          New event<br/>
          coming up / <time datetime="06-07">june 7</time>&nbsp;-&nbsp;<time datetime="06-13">13</time>
        </div>
        <h3 className="banner-title">Crossfit</h3>
      </div>
      <div className="banner-pagination">
        <ul className="banner-pagination-list">
          {[1, 2, 3].map((item, index) => (
            <li key={item} className="banner-pagination-item">
              <button 
                className={`banner-pagination-button ${index === 2 ? 'is-current' : ''}`} 
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