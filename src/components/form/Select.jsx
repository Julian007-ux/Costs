import styles from './Select.module.css';

const Select = ({ name, option, value, handleonchange, text }) => {
  return (
    <div className={styles.Select_control} >
      <label htmlFor={name}> {text}: </label>
      <select name={name} id={name}>
        <option value={value}> Selecione uma opção </option>
      </select>
    </div>
  );
};

export default Select;