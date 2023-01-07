/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Product.css';

function Product ({title,image,price,rating}){
    return (
    <div className="product" >
        <div className="product__info" >
            <p> {title} </p>
            <p className= "product__price"> Product Price : 
                <strong>{price}</strong>
                <small>₺</small>
            </p>
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_,i) => {
                    return <p>⭐</p>
                })}
            </div>
        </div>
        <img className='' src={require('./img/Product_Img1.png')} />
        <button className="button"> Add to Basket</button>
    </div>
    )
}

export default Product;