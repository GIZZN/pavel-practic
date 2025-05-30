'use client';

import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  );
} 