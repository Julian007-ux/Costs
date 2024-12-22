import styles from './Select.module.css';

const Select = ({ name, options, handleCategory, text, value }) => {
  return (
    <div className={styles.Select_control} >
      <label htmlFor={name}> {text}: </label>
      <select onChange={handleCategory} value={value || ''} name={name} id={name}>
      <option>Selecione uma Opção</option>
        {
          options.map((op) =>(
            <option value={op.id} key={op.id} >{op.name}</option>
          ))}
      </select>
    </div>
  );
};

export default Select;