import styles from './Button.module.css';

const Button = ({ children, variant = 'default', href, className = '', ...props }) => {
  const buttonClass = `${styles.button} ${variant === 'transparent' ? styles.transparent : ''} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} type={props.type || 'button'} {...props}>
      {children}
    </button>
  );
};

export default Button;