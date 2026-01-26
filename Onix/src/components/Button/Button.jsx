import './Button.css';

const Button = ({ children, variant = 'default', href, className = '', ...props }) => {
  const buttonClass = `button ${variant === 'transparent' ? 'transparent' : ''} ${className}`.trim();

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