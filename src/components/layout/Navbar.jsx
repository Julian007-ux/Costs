import styles from "./NavBar.module.css";

import logo from "../img/costs_logo.png";

import { Link } from "react-router-dom";

import Conteiner from "./Conteiner";
const NavBar = () => {
  return (
    <nav className={styles.navbar} >
      <Conteiner>
        <Link to="/">
          <img src={logo} alt="costs_logo" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item} >
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item} >
            <Link to="/project">Projetos</Link>
          </li>
          <li className={styles.item} >
            <Link to="/company">Empresa</Link>
          </li>
          <li className={styles.item} >
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </Conteiner>
    </nav>
  );
};

export default NavBar;