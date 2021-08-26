import React from 'react';
import './minicart.css'
import { Product } from '../../types'
import Minicartcard from './Minicartcard';

export const Minicart = ({ products }: { products: Product[] }): JSX.Element => {
    // get subtotal
    const prices = products.map((item): number => item.price)
    const subtotal = prices.reduce((a, b): number => a + b)

    // get taxes and Duties
    const tempTaxAndDuties = products.map((item): number => {
        if (item.tax !== undefined && item.duties !== undefined) {
            return item.tax + item.duties
        }
        return 0
    })
    const taxAndDuties = tempTaxAndDuties.reduce((a, b): number => a + b)

    // get shipping cost
    const temShipping = products.map((item): number => {
        if (item.shipping) return item.shipping
        return 0
    })
    const shipping = temShipping.reduce((a, b): number => a + b)

    // get order total
    const orderTotal = subtotal + taxAndDuties + shipping

    return (
        <div className="mini__cart">
            <header>
                <h1 className="mini__cart-heading">My Cart.</h1>
            </header>
            <main>
                {products && products.map(product => (
                    <Minicartcard
                        product_id={product.product_id}
                        product_name={product.product_name}
                        brand_name={product.brand_name}
                        product_img_url={product.product_img_url}
                        color={product.color}
                        price={product.price}
                    />
                ))}
            </main>
            <footer>
                <div className="mini__cart-footer-rightside">
                    <p>Subtotal:</p>
                    <p>Taxes & Duties:</p>
                    <p>Shipping:</p>
                    <p>Order Total:</p>
                </div>
                <div className="mini__cart-footer-leftside">
                    <p>${subtotal.toFixed(2)} HKD</p>
                    <p>${taxAndDuties.toFixed(2)} HKD</p>
                    <p>${shipping.toFixed(2)} HKD</p>
                    <p>${orderTotal.toFixed(2)} HKD</p>
                </div>
            </footer>
        </div>
    );
};

export default Minicart;