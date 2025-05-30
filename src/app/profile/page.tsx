'use client';

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
}

const mockOrders: Order[] = [
  {
    id: "ORD-001",
    date: "2024-03-20",
    status: "Доставлен",
    total: 129999,
    items: [
      { name: "iPhone 15 Pro", quantity: 1, price: 129999 }
    ]
  },
  {
    id: "ORD-002",
    date: "2024-03-15",
    status: "В пути",
    total: 68998,
    items: [
      { name: "AirPods Pro 2", quantity: 2, price: 22999 },
      { name: "Apple Watch Series 8", quantity: 1, price: 22999 }
    ]
  }
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    } else if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.name || '',
        email: user.email || ''
      }));
    }
  }, [isAuthenticated, user, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы запрос к API для обновления данных
    console.log('Обновление данных:', formData);
  };

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <div className={styles.userInfo}>
              <div className={styles.avatar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
            <nav className={styles.navigation}>
              <button 
                className={`${styles.navButton} ${activeTab === 'profile' ? styles.active : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Личные данные
              </button>
              <button 
                className={`${styles.navButton} ${activeTab === 'orders' ? styles.active : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                  <path d="M7 7h.01" />
                </svg>
                История заказов
              </button>
              <button 
                className={`${styles.navButton} ${activeTab === 'settings' ? styles.active : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Настройки
              </button>
            </nav>
          </div>
          
          <div className={styles.content}>
            {activeTab === 'profile' && (
              <div className={styles.section}>
                <h2>Личные данные</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label>Имя</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Телефон</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <button type="submit" className={styles.submitButton}>
                    Сохранить изменения
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className={styles.section}>
                <h2>История заказов</h2>
                <div className={styles.orders}>
                  {mockOrders.map((order) => (
                    <div key={order.id} className={styles.order}>
                      <div className={styles.orderHeader}>
                        <div className={styles.orderInfo}>
                          <h3>Заказ {order.id}</h3>
                          <span className={styles.orderDate}>
                            {new Date(order.date).toLocaleDateString('ru-RU')}
                          </span>
                        </div>
                        <span className={`${styles.orderStatus} ${styles[order.status.toLowerCase()]}`}>
                          {order.status}
                        </span>
                      </div>
                      <div className={styles.orderItems}>
                        {order.items.map((item, index) => (
                          <div key={index} className={styles.orderItem}>
                            <span>{item.name}</span>
                            <span>{item.quantity} шт.</span>
                            <span>{item.price.toLocaleString()} ₽</span>
                          </div>
                        ))}
                      </div>
                      <div className={styles.orderFooter}>
                        <span>Итого:</span>
                        <span className={styles.orderTotal}>
                          {order.total.toLocaleString()} ₽
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className={styles.section}>
                <h2>Настройки</h2>
                <div className={styles.settingsGroup}>
                  <h3>Уведомления</h3>
                  <div className={styles.setting}>
                    <label className={styles.switch}>
                      <input type="checkbox" defaultChecked />
                      <span className={styles.slider}></span>
                    </label>
                    <div className={styles.settingInfo}>
                      <h4>Email-уведомления</h4>
                      <p>Получать уведомления о заказах и акциях на email</p>
                    </div>
                  </div>
                  <div className={styles.setting}>
                    <label className={styles.switch}>
                      <input type="checkbox" defaultChecked />
                      <span className={styles.slider}></span>
                    </label>
                    <div className={styles.settingInfo}>
                      <h4>SMS-уведомления</h4>
                      <p>Получать уведомления о заказах по SMS</p>
                    </div>
                  </div>
                </div>
                <div className={styles.settingsGroup}>
                  <h3>Безопасность</h3>
                  <button className={styles.settingButton}>
                    Изменить пароль
                  </button>
                  <button className={styles.settingButton}>
                    Двухфакторная аутентификация
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 