import React from 'react';
import styles from '../Components/Footer.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dog. Alguns direitos reservados.</p>
    </footer>
  );
};
