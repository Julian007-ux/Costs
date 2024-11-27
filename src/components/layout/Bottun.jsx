import { Link } from "react-router-dom";

const Bottun = (props) => {
  return (
    <>
      <button
        className={
          "my-3 bg-black text-white w-28 duration-500 p-2 rounded m-auto hover:text-yellow-400"
        }
      >
        <Link to={props.url}> {props.name} </Link>
      </button>
    </>
  );
};

export default Bottun;
