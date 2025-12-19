import "./Footer.css";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-main-inner container">
          <header className="footer-header">
            <Logo className="footer-logo" width={270} height={50} />
            <p className="footer-description section-description">
              please feel free to send us an e-mail at <a href="mailto:kropp@qodeinteractive.com">kropp@qodeinteractive.com</a> For any additional inquiries
            </p>
          </header>
          <div className="footer-body">
            <div className="footer-column">
              <h2 className="footer-column-title">About</h2>
              <p className="footer-about">
                Shape up your site with Kropp, a theme especially made for fitness & gym websites.
              </p>
            </div>
            <div className="footer-column">
              <h2 className="footer-column-title">Working hours</h2>
              <div className="footer-schedule">
                Monday - Friday<br/>
                <time>05:30 - 24:00</time>
              </div>
              <br />
              <div className="footer-schedule">
                Weekdays<br/>
                <time>00:00 - 24:00</time>
              </div>
            </div>
            <div className="footer-column">
              <h2 className="footer-column-title">Location</h2>
              <address className="footer-address">
                68 Street Holborn, London, UK
              </address>
              <br />
              <div className="footer-contacts">
                <a href="mailto:kropp@qodeinteractive.com">kropp@qodeinteractive.com</a><br/>
                <a href="tel:+17184076400">+ (1) 718 - 407 - 6400</a>
              </div>
            </div>
            <div className="footer-column">
              <h2 className="footer-column-title has-arrow-diagonal">start now</h2>
              <form className="footer-subscribe">
                <Input className="footer-subscribe-input" type="email" placeholder="Email" />
                <button className="footer-subscribe-button" type="submit" title="Subscribe"></button>
              </form>
              <div className="footer-socials">
                <a href="#" className="social-link">TikTok</a>
                <a href="#" className="social-link">YouTube</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-extra">
        <div className="footer-extra-inner container">
          <div className="footer-copyright">
            © 2022 Qode Interactive, All Rights Reserved | <a href="/">Privacy Policy</a> | <a href="/">Contact Us</a>
          </div>
          
          <div className="footer-author">
            <p className="author-name">Автор: Юрій Овчаренко</p>
            <div className="author-links">
              <a href="https://github.com/YuriOvcharenko/Practice-for-Onix" target="_blank">GitHub</a>
              <span className="separator">|</span>
              <a href="https://www.figma.com/design/73xO14r1FCSy90BfkhhC92/Free-Web-UI-designs?node-id=5-2&t=qdu6Qb6cmqDIBEGD-0" target="_blank">Design source</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;