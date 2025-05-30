'use client';

import React, { useState, useMemo } from 'react';
import styles from './page.module.css';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    price: 99990,
    image: '/images/products/placeholder1.jpg',
    category: 'Смартфоны'
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    price: 129990,
    image: '/images/products/placeholder2.jpg',
    category: 'Ноутбуки'
  },
  {
    id: 3,
    name: 'iPad Pro 12.9',
    price: 159990,
    image: '/images/products/placeholder3.jpg',
    category: 'Планшеты'
  },
  {
    id: 4,
    name: 'AirPods Pro',
    price: 24990,
    image: '/images/products/placeholder4.jpg',
    category: 'Аксессуары'
  },
];

const categories = [
  'Все',
  'Смартфоны',
  'Ноутбуки',
  'Планшеты',
  'Аксессуары'
];

export default function Tovari() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [sortBy, setSortBy] = useState('popular');
  const { addToCart, items } = useCart();

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'Все') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (priceRange.min !== '') {
      filtered = filtered.filter(product => product.price >= Number(priceRange.min));
    }
    if (priceRange.max !== '') {
      filtered = filtered.filter(product => product.price <= Number(priceRange.max));
    }

    switch (sortBy) {
      case 'priceAsc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'nameAsc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    setPriceRange(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
  };

  const getItemQuantity = (productId: number) => {
    const item = items.find(item => item.id === productId);
    return item?.quantity || 0;
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>Категории</h2>
        <ul className={styles.categories}>
          {categories.map((category) => (
            <li key={category}>
              <button 
                className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        
        <div className={styles.filters}>
          <h2>Фильтры</h2>
          <div className={styles.priceFilter}>
            <h3>Цена</h3>
            <div className={styles.priceInputs}>
              <input 
                type="number" 
                placeholder="От" 
                value={priceRange.min}
                onChange={(e) => handlePriceChange('min', e.target.value)}
              />
              <input 
                type="number" 
                placeholder="До" 
                value={priceRange.max}
                onChange={(e) => handlePriceChange('max', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.toolbar}>
          <h1>Каталог товаров</h1>
          <div className={styles.sorting}>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popular">По популярности</option>
              <option value="priceAsc">По возрастанию цены</option>
              <option value="priceDesc">По убыванию цены</option>
              <option value="nameAsc">По названию А-Я</option>
            </select>
          </div>
        </div>

        <div className={styles.productGrid}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src={product.image} 
                  alt={product.name}
                  width={1100}
                  height={200}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <p className={styles.category}>{product.category}</p>
                <p className={styles.price}>{product.price.toLocaleString()} ₽</p>
                <div className={styles.cartActions}>
                  {getItemQuantity(product.id) > 0 ? (
                    <div className={styles.quantityIndicator}>
                      В корзине: {getItemQuantity(product.id)}
                    </div>
                  ) : null}
                  <button 
                    className={styles.addToCart}
                    onClick={() => handleAddToCart(product)}
                  >
                    {getItemQuantity(product.id) > 0 ? 'Добавить ещё' : 'В корзину'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 