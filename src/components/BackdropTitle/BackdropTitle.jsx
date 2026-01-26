import styles from './BackdropTitle.module.css';

const BackdropTitle = ({ children, dataTitle, centered = false, className = '' }) => {
  const classes = `${styles['backdrop-title']} ${centered ? styles.centered : ''} ${className}`;
  
  return (
    <h3 className={classes} data-title={dataTitle}>
      {children}
    </h3>
  );
};

export default BackdropTitle;