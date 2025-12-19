import './BackdropTitle.css';

const BackdropTitle = ({ children, dataTitle, centered = false, className = '' }) => {
  const classes = `backdrop-title ${centered ? 'centered' : ''} ${className}`;
  
  return (
    <h3 className={classes} data-title={dataTitle}>
      {children}
    </h3>
  );
};

export default BackdropTitle;