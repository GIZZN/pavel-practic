import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.column}>
            <h3>Istore</h3>
            <p>Магазин современной техники и электроники. Официальная гарантия. Доставка по всей России.</p>
            <div className={styles.social}>
              <a href="#" aria-label="Вконтакте">VK</a>
              <a href="#" aria-label="Телеграм">TG</a>
              <a href="#" aria-label="Ютуб">YT</a>
            </div>
          </div>
          
          <div className={styles.column}>
            <h4>Каталог</h4>
            <ul>
              <li><Link href="/catalog/smartphones">Смартфоны</Link></li>
              <li><Link href="/catalog/tablets">Планшеты</Link></li>
              <li><Link href="/catalog/laptops">Ноутбуки</Link></li>
              <li><Link href="/catalog/smartwatches">Умные часы</Link></li>
              <li><Link href="/catalog/accessories">Аксессуары</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4>Информация</h4>
            <ul>
              <li><Link href="/about">О компании</Link></li>
              <li><Link href="/delivery">Доставка и оплата</Link></li>
              <li><Link href="/guarantee">Гарантия</Link></li>
              <li><Link href="/service">Сервисный центр</Link></li>
              <li><Link href="/contacts">Контакты</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4>Контакты</h4>
            <address className={styles.contacts}>
              <p>Москва, ул. Примерная, д. 123</p>
              <p>Телефон: <a href="tel:+79001234567">+7 (900) 123-45-67</a></p>
              <p>Email: <a href="mailto:info@istore.ru">info@istore.ru</a></p>
              <p>Ежедневно с 10:00 до 21:00</p>
            </address>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            © 2025 Istore. Все права защищены.
          </div>
          <div className={styles.policy}>
            <Link href="/privacy">Политика конфиденциальности</Link>
            <Link href="/terms">Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 