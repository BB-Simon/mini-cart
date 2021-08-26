import React from 'react';
import './styles.css'

const CustomerInfo = () => {
    return (
        <div className="customerinfo__wrapper">
            <h1 className="customerinfo__heading">CUSTOMER INFORMATION.</h1>
            <h4 className="customerinfo__heading-tag">1. Identification.</h4>
            <input className="customerinfo__heading-input" type="text" placeholder="Email Address" />
            <input className="customerinfo__heading-input" type="text" placeholder="Resident ID Number (if applicable):" />
        </div>
    );
};

export default CustomerInfo;