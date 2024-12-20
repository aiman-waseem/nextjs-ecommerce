"use client"
import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store/store';
import CartOffcanvas from '@/components/CartOffcanvas';

const Providers = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <Provider store={store}>
      
        {children}
    </Provider>
  )
}

export default Providers
