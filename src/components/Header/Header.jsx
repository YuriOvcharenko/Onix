import styles from './Header.module.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

function Header() {
  const menuItems = ['Home', 'Pages', 'Portfolio', 'Blog', 'Shop'];

  return (
    <header className={styles.header}>
      <Logo className={styles['header-logo']} />

      <nav className={styles['header-menu']}>
        <ul className={styles['header-menu-list']}>
          {menuItems.map((item) => (
            <li key={item} className={styles['header-menu-item']}>
              <a 
                className={`${styles['header-menu-link']} ${item === 'Home' ? styles['is-current'] : ''}`} 
                href="/"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles['header-actions']}>
        <Button>Book now</Button>
        <button className={styles['header-burger-button']} type="button">
          <span className="visually-hidden">Open menu</span>
          <span className={styles['header-burger-button-line']}></span>
          <span className={styles['header-burger-button-line']}></span>
          <span className={styles['header-burger-button-line']}></span>
        </button>
      </div>
    </header>
  );
}

export default Header;