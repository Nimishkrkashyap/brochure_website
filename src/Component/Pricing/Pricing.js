import React from 'react'
import priceStyle from './Pricing.module.css'
import Card from './Card/Card';

function Pricing() {
    return (
        <>
            <div className={priceStyle.container} id="pricing">
            <h1 className={priceStyle.heading}>Pricing</h1>
            <p className={priceStyle.para}>Lorem ipsum dolor sit amet consectetur.</p>
            <div className={priceStyle.Price_div}>
            <Card />
            <Card />
            <Card />
            </div>
            </div>
        </>
    )
}

export default Pricing;