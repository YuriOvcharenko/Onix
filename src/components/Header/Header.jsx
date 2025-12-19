import './Header.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

function Header() {
  const menuItems = ['Home', 'Pages', 'Portfolio', 'Blog', 'Shop'];

  return (
    <header className="header">
      <Logo className="header-logo" />

      <nav className="header-menu">
        <ul className="header-menu-list">
          {menuItems.map((item) => (
            <li key={item} className="header-menu-item">
              <a className={`header-menu-link ${item === 'Home' ? 'is-current' : ''}`} href="/">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-actions">
        <Button>Book now</Button>
        <button className="header-burger-button" type="button">
          <span className="visually-hidden">Open menu</span>
          <span className="header-burger-button-line"></span>
          <span className="header-burger-button-line"></span>
          <span className="header-burger-button-line"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;