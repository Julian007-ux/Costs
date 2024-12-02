import styles from './Input.module.css';

const Input = ({ name, type, placeholder, value, handleonchange, text }) => {
  return (
    <div className={styles.Input_control} >
      <label htmlFor={name}> {text}: </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleonchange}
      />
    </div>
  );
};

export default Input;