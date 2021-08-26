import React from 'react';
import './App.css';
import Logo from './assets/Logo';
import data from './static/data.json'
import { Product } from './types'
import Minicart from './components/Minicart/Minicart'
import CustomerInfo from './components/Customerinfo';

function App() {
  const products: Product[] = data
  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}><Logo /></div>
      <div style={{ display: 'flex', marginTop: 50 }}>
        <CustomerInfo />
        <Minicart products={products} />
      </div>
    </div>
  );
}

export default App;
