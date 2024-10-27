// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '/assets/logo.png';

const Navbar = () => {
  const [isGripSocksOpen, setGripSocksOpen] = useState(false);
  const [isTrainingOpen, setTrainingOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoText}>
      <img src={logo} alt="BecomePro Logo" className={styles.logoImg} />
        <Link to="/">BecomePro</Link>
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.home}><Link to="/">НАЧАЛО</Link></li>
        <li
          onMouseEnter={() => setGripSocksOpen(true)}
          onMouseLeave={() => setGripSocksOpen(false)}
        >
          <span>GRIP SOCKS</span>
          {isGripSocksOpen && (
            <ul className={styles.dropdown}>
              <li><Link to="/grip-socks/features">Характеристики</Link></li>
              <li><Link to="/grip-socks/pricing">Цени</Link></li>
              <li><Link to="/grip-socks/order">Поръчай сега</Link></li>
              <li><Link to="/grip-socks/reviews">Отзиви</Link></li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => setTrainingOpen(true)}
          onMouseLeave={() => setTrainingOpen(false)}
        >
          <span>ТРЕНИРОВЪЧНИ УСЛУГИ</span>
          {isTrainingOpen && (
            <ul className={styles.dropdown}>
              <li><Link to="/training/fitness">Фитнес режими</Link></li>
              <li><Link to="/training/technical">Технически програми</Link></li>
              <li><Link to="/training/mental">Ментална подготовка</Link></li>
              <li><Link to="/training/nutrition">Хранене и хранителни режими</Link></li>
              <li><Link to="/training/speed">Скорост и експлозивност</Link></li>
              <li><Link to="/training/recovery">Възстановяване</Link></li>
              <li><Link to="/training/mobility">Мобилност и Стречинг</Link></li>
              <li><Link to="/training/endurance">Издръжливост</Link></li>
              <li><Link to="/training/video-analysis">Видео Анализи</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
