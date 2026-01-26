import './Input.css';

const Input = ({ label, id, type = 'text', placeholder, className = '', isSelect = false, children, ...props }) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label className="visually-hidden" htmlFor={id}>{label}</label>}
      
      {isSelect ? (
        <select className="input" id={id} {...props}>
          {children}
        </select>
      ) : (
        <input
          className="input"
          id={id}
          type={type}
          placeholder={placeholder}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;