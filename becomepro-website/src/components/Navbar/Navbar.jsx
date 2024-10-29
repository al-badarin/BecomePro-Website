// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';
import logo from '/assets/logo.png';

const Navbar = () => {
  const [isGripSocksOpen, setGripSocksOpen] = useState(false);
  const [isTrainingOpen, setTrainingOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  // Function to handle navigation to a section within /grip-socks
  const handleGripSocksNavigation = (section) => {
    if (location.pathname !== '/grip-socks') {
      // If not already on /grip-socks, navigate to it first
      window.location.href = `/grip-socks#${section}`;
    } else {
      // Scroll to the section if already on /grip-socks
      ScrollLink.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
    setMenuOpen(false); // Close the menu
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoText}>
        <img src={logo} alt="BecomePro Logo" className={styles.logoImg} />
        <RouterLink to="/">BecomePro</RouterLink>
      </div>
      <div className={styles.toggleButton} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li className={styles.home}>
          <RouterLink to="/" onClick={() => setMenuOpen(false)}>
            НАЧАЛО
          </RouterLink>
        </li>

        {/* GRIP SOCKS Menu */}
        <li
          onMouseEnter={() => setGripSocksOpen(true)}
          onMouseLeave={() => setGripSocksOpen(false)}
          className={styles.dropdownContainer}
        >
          <RouterLink to="/grip-socks" onClick={() => setMenuOpen(false)}>
            GRIP SOCKS
          </RouterLink>
          {isGripSocksOpen && (
            <ul className={styles.dropdown}>
              <li>
                <RouterLink
                  to="/grip-socks/features"
                  onClick={() => handleGripSocksNavigation('features')}
                >
                  Характеристики
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/grip-socks/pricing"
                  onClick={() => handleGripSocksNavigation('pricing')}
                >
                  Цени
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/grip-socks/order"
                  onClick={() => handleGripSocksNavigation('order')}
                >
                  Поръчай сега
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/grip-socks/reviews"
                  onClick={() => handleGripSocksNavigation('reviews')}
                >
                  Отзиви
                </RouterLink>
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
                <RouterLink
                  to="/training/fitness"
                  onClick={() => setMenuOpen(false)}
                >
                  Фитнес режими
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/training/technical"
                  onClick={() => setMenuOpen(false)}
                >
                  Технически програми
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/training/mental"
                  onClick={() => setMenuOpen(false)}
                >
                  Ментална подготовка
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/training/nutrition"
                  onClick={() => setMenuOpen(false)}
                >
                  Хранене и хранителни режими
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/training/speed"
                  onClick={() => setMenuOpen(false)}
                >
                  Скорост и експлозивност
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/training/recovery"
                  onClick={() => setMenuOpen(false)}
                >
                  Възстановяване
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/training/mobility"
                  onClick={() => setMenuOpen(false)}
                >
                  Мобилност и Стречинг
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/training/endurance"
                  onClick={() => setMenuOpen(false)}
                >
                  Издръжливост
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/training/video-analysis"
                  onClick={() => setMenuOpen(false)}
                >
                  Видео Анализи
                </RouterLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
