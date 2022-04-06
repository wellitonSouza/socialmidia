import React from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css';
import {ReactComponent as Dogs} from '../Assets/dogs.svg';

export default function Header() {
  console.log(styles);
  return (
  <header className={styles.header}>
    <nav className={`${styles.nav} container`}>
      <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
        <Dogs/>
      </Link>
      <Link to="/login" className={styles.login}>Login / Criar conta</Link>
      
    </nav>
  </header>);
}
