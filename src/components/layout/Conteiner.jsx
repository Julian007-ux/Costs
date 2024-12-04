import styles from "./Conteiner.module.css";
const Conteiner = (props) => {
  return (
    <div
      className={`${
        styles[props.custumClass]
      } w-[100%] flex justify-between my-0 mx-auto flex-wrap`}
    >
      {props.children}
    </div>
  );
};

export default Conteiner;
