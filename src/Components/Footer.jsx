import React from "react";
import styles from './Footer.module.css';
import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg";

export default function Footer() {
  return <footer className={styles.footer}>
    <Dogs />
    <p>Dog. Alguns direitos reservados.</p>
  </footer>;
}
