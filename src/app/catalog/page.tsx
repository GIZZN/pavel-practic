'use client';

import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Tovari from './tovari';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Tovari />
      </main>
      <Footer />
    </>
  );
} 