import { useState, useRef, useEffect } from 'react';
import styles from './Input.module.css';

const Input = ({ 
  label, 
  id, 
  type = 'text', 
  placeholder, 
  className = '', 
  isSelect = false, 
  options = [],
  onChange,
  value,
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    if (onChange) {
      onChange({ target: { value: optionValue, id } });
    }
  };

  const selectedOption = options.find(opt => opt.value === selectedValue);
  const currentLabel = selectedOption ? selectedOption.label : placeholder;
  const isPlaceholderActive = !selectedOption;

  const inputClassName = `${styles.input} global-input-field`; 

  return (
    <div className={`${styles['input-wrapper']} ${className}`} ref={dropdownRef}>
      {label && <label className="visually-hidden" htmlFor={id}>{label}</label>}
      
      {isSelect ? (
        <div className={styles['select-container']}>
          <button 
            type="button" 
            className={`${inputClassName} ${styles['select-trigger']} ${isOpen ? styles.open : ''} ${isPlaceholderActive ? styles.placeholder : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            id={id}
            {...props}
          >
            {currentLabel}
          </button>
          
          <div className={`${styles['select-dropdown']} ${isOpen ? styles.show : ''}`}>
            <ul className={styles['select-list']}>
              {options.length > 0 ? (
                options.map((option) => (
                  <li 
                    key={option.value} 
                    className={`${styles['select-option']} ${selectedValue === option.value ? styles.selected : ''}`}
                    onClick={() => handleSelect(option.value)}
                  >
                    {option.label}
                  </li>
                ))
              ) : (
                <li className={styles['select-option-empty']}>Немає варіантів</li>
              )}
            </ul>
          </div>
          
          <input type="hidden" name={id} value={selectedValue} />
        </div>
      ) : (
        <input
          className={inputClassName}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;