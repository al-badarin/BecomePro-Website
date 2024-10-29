// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';
import logo from '/assets/logo.png';

const Navbar = () => {
  const [isGripSocksOpen, setGripSocksOpen] = useState(false);
  const [isTrainingOpen, setTrainingOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoText}>
        <img src={logo} alt="BecomePro Logo" className={styles.logoImg} />
        <Link to="/">BecomePro</Link>
      </div>
      <div className={styles.toggleButton} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li className={styles.home}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            НАЧАЛО
          </Link>
        </li>

        {/* GRIP SOCKS Menu */}
        <li
          onMouseEnter={() => setGripSocksOpen(true)}
          onMouseLeave={() => setGripSocksOpen(false)}
          className={styles.dropdownContainer}
        >
          <Link to="/grip-socks" onClick={() => setMenuOpen(false)}>
            GRIP SOCKS
          </Link>
          {isGripSocksOpen && (
            <ul className={styles.dropdown}>
              <li>
                <Link
                  to="/grip-socks/features"
                  onClick={() => setMenuOpen(false)}
                >
                  Характеристики
                </Link>
              </li>
              <li>
                <Link
                  to="/grip-socks/pricing"
                  onClick={() => setMenuOpen(false)}
                >
                  Цени
                </Link>
              </li>
              <li>
                <Link to="/grip-socks/order" onClick={() => setMenuOpen(false)}>
                  Поръчай сега
                </Link>
              </li>
              <li>
                <Link
                  to="/grip-socks/reviews"
                  onClick={() => setMenuOpen(false)}
                >
                  Отзиви
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* TRAINING SERVICES Menu */}
        <li
          onMouseEnter={() => setTrainingOpen(true)}
          onMouseLeave={() => setTrainingOpen(false)}
          className={styles.dropdownContainer}
        >
          <span>ТРЕНИРОВЪЧНИ УСЛУГИ</span>
          {isTrainingOpen && (
            <ul className={styles.dropdown}>
              <li>
                <Link to="/training/fitness" onClick={() => setMenuOpen(false)}>
                  Фитнес режими
                </Link>
              </li>
              <li>
                <Link
                  to="/training/technical"
                  onClick={() => setMenuOpen(false)}
                >
                  Технически програми
                </Link>
              </li>
              <li>
                <Link to="/training/mental" onClick={() => setMenuOpen(false)}>
                  Ментална подготовка
                </Link>
              </li>
              <li>
                <Link
                  to="/training/nutrition"
                  onClick={() => setMenuOpen(false)}
                >
                  Хранене и хранителни режими
                </Link>
              </li>
              <li>
                <Link to="/training/speed" onClick={() => setMenuOpen(false)}>
                  Скорост и експлозивност
                </Link>
              </li>
              <li>
                <Link
                  to="/training/recovery"
                  onClick={() => setMenuOpen(false)}
                >
                  Възстановяване
                </Link>
              </li>
              <li>
                <Link
                  to="/training/mobility"
                  onClick={() => setMenuOpen(false)}
                >
                  Мобилност и Стречинг
                </Link>
              </li>
              <li>
                <Link
                  to="/training/endurance"
                  onClick={() => setMenuOpen(false)}
                >
                  Издръжливост
                </Link>
              </li>
              <li>
                <Link
                  to="/training/video-analysis"
                  onClick={() => setMenuOpen(false)}
                >
                  Видео Анализи
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
