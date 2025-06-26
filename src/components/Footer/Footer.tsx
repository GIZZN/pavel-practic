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
              <li><Link href="/catalog/smartphones" onClick={(e) => e.preventDefault()}>Смартфоны</Link></li>
              <li><Link href="/catalog/tablets" onClick={(e) => e.preventDefault()}>Планшеты</Link></li>
              <li><Link href="/catalog/laptops" onClick={(e) => e.preventDefault()}>Ноутбуки</Link></li>
              <li><Link href="/catalog/smartwatches" onClick={(e) => e.preventDefault()}>Умные часы</Link></li>
              <li><Link href="/catalog/accessories" onClick={(e) => e.preventDefault()}>Аксессуары</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4>Информация</h4>
            <ul>
              <li><Link href="/about" onClick={(e) => e.preventDefault()}>О компании</Link></li>
              <li><Link href="/delivery" onClick={(e) => e.preventDefault()}>Доставка и оплата</Link></li>
              <li><Link href="/guarantee" onClick={(e) => e.preventDefault()}>Гарантия</Link></li>
              <li><Link href="/service" onClick={(e) => e.preventDefault()}>Сервисный центр</Link></li>
              <li><Link href="/contacts" onClick={(e) => e.preventDefault()}>Контакты</Link></li>
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
            <Link href="/privacy" onClick={(e) => e.preventDefault()}>Политика конфиденциальности</Link>
            <Link href="/terms" onClick={(e) => e.preventDefault()}>Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 