import styles from "./Conteiner.module.css";
const Conteiner = (props) => {
  return (
    <div
      className={`${
        styles[props.custumClass]
      } w-[1200px] flex justify-between my-0 mx-auto flex-wrap`}
    >
      {props.children}
    </div>
  );
};

export default Conteiner;
