'use client';

import React from 'react';
import styles from './page.module.css';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className={styles.emptyCart}>
          <h1>Корзина пуста</h1>
          <p>Перейдите в каталог, чтобы добавить товары</p>
          <Link href="/catalog" className={styles.continueButton}>
            Перейти в каталог
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.header}>
          <h1>Корзина</h1>
          <button onClick={clearCart} className={styles.clearButton}>
            Очистить корзину
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.items}>
            {items.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.itemInfo}>
                  <h3>{item.name}</h3>
                  <p className={styles.itemPrice}>{item.price.toLocaleString()} ₽</p>
                </div>
                <div className={styles.itemActions}>
                  <div className={styles.quantity}>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className={styles.removeButton}
                  >
                    Удалить
                  </button>
                </div>
                <div className={styles.itemTotal}>
                  {(item.price * item.quantity).toLocaleString()} ₽
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <h2>Итого</h2>
            <div className={styles.summaryContent}>
              <div className={styles.summaryRow}>
                <span>Товары ({items.length})</span>
                <span>{totalPrice.toLocaleString()} ₽</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Доставка</span>
                <span>Бесплатно</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.total}`}>
                <span>К оплате</span>
                <span>{totalPrice.toLocaleString()} ₽</span>
              </div>
              <button className={styles.checkoutButton}>
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 