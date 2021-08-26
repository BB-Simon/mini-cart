import React from 'react';
import './minicart-card.css'
import {Product} from '../../types'

const Minicartcard = ({ product_img_url, product_id, brand_name, product_name, color, price }: Product):JSX.Element => {
    return (
        <div className="mini__cart__card" key={product_id}>
            <div className="mini__cart__card-rightside">
                <div className="mini__cart__card-image-wrapper">
                    <img src={product_img_url} alt={product_name} />
                </div>
                <div className="mini__cart__card-info-wrapper">
                    <h2 className="mini__cart__card-brand">{brand_name}</h2>
                    <p className="mini__cart__card-ptag">{product_name}</p>
                    <p className="mini__cart__card-ptag">Color: {color}</p>
                    <span className="mini__cart__card-id">{product_id} </span>
                </div>
            </div>
            <div>
                <p className="mini__cart__card-ptag">${price} HKD</p>
            </div>
        </div>
    );
};

export default Minicartcard;