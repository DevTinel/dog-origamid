import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdcionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from '../User/UserHeaderNav.module.css';

export const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const [mobile, setMobile] = useState(null);
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos /> {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas /> {mobile && 'Estatisticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdcionarFoto />
        {mobile && ' Adicionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <Sair /> {mobile && 'Sair'}
      </button>
    </nav>
  );
};
