import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Input from "../Input/Input"; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-main']}>
        <div className={`${styles['footer-main-inner']} container`}>
          <header className={styles['footer-header']}>
            <Logo className={styles['footer-logo']} width={270} height={50} />
            <p className={`${styles['footer-description']} section-description`}>
              please feel free to send us an e-mail at <a href="mailto:kropp@qodeinteractive.com">kropp@qodeinteractive.com</a> For any additional inquiries
            </p>
          </header>

          <div className={styles['footer-body']}>
            <div className={styles['footer-column']}>
              <h2 className={styles['footer-column-title']}>About</h2>
              <p className={styles['footer-about']}>
                Shape up your site with Kropp, a theme especially made for fitness & gym websites.
              </p>
            </div>

            <div className={styles['footer-column']}>
              <h2 className={styles['footer-column-title']}>Working hours</h2>
              <div className={styles['footer-schedule']}>
                Monday - Friday<br/>
                <time dateTime="05:30/24:00">05:30 - 24:00</time>
              </div>
              <div className={styles['footer-schedule']}>
                Weekdays<br/>
                <time dateTime="00:00/24:00">00:00 - 24:00</time>
              </div>
            </div>

            <div className={styles['footer-column']}>
              <h2 className={styles['footer-column-title']}>Location</h2>
              <address className={styles['footer-address']}>
                68 Jay Street, Brooklyn,<br/>
                NY 11201, United States
              </address>
              <div className={styles['footer-contacts']}>
                <ul className={styles['footer-contacts-list']}>
                  <li className={styles['footer-contacts-item']}>
                    <a className={styles['footer-contacts-link']} href="mailto:kropp@qodeinteractive.com">
                      kropp@qodeinteractive.com
                    </a>
                  </li>
                  <li className={styles['footer-contacts-item']}>
                    <a className={styles['footer-contacts-link']} href="tel:+17184076400">
                      + (1) 718 - 407 - 6400
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles['footer-column']}>
              <h2 className={`${styles['footer-column-title']} ${styles['has-arrow-diagonal']}`}>
                start now
              </h2>
              <form className={styles['footer-subscribe']}>
                <label className="visually-hidden" htmlFor="subscribe-email">Email</label>
                
                <Input
                  className={styles['footer-subscribe-input']}
                  id="subscribe-email"
                  type="email"
                  placeholder="Email"
                />
                
                <button
                  className={styles['footer-subscribe-button']}
                  type="submit"
                  title="Subscribe"
                >
                  <span className="visually-hidden">Subscribe</span>
                </button>
              </form>
              
              <div className={styles['footer-socials']}>
                <a href="/" className={styles['social-link']} target="_blank">TikTok</a>
                <a href="/" className={styles['social-link']} target="_blank">YouTube</a>
                <a href="/" className={styles['social-link']} target="_blank">Instagram</a>
                <a href="/" className={styles['social-link']} target="_blank">Facebook</a>
                <a href="/" className={styles['social-link']} target="_blank">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['footer-extra']}>
        <div className={`${styles['footer-extra-inner']} container`}>
          <div className={styles['footer-copyright']}>
            © 2022 Qode Interactive, All Rights Reserved | <a href="/">Privacy Policy</a> | <a href="/">Contact Us</a>
          </div>
          <div className={styles['footer-author']}>
            <p className={styles['author-name']}>Автор: Юрій Овчаренко</p>
            <div className={styles['author-links']}>
              <a href="https://github.com/YuriOvcharenko/Onix" target="_blank" rel="noreferrer">GitHub</a>
              <span className={styles.separator}>|</span>
              <a href="https://www.figma.com/design/m3lT3GF4mUgEBaU3qysyeu/10--Free-Web-UI-designs--Community-?node-id=5-2&t=ddClD3EssW8AizbE-0" target="_blank" rel="noreferrer">Design source</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;