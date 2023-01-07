/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Product.css';

function Product (){
    return (
    <div className="product" >
        <div className="product__info" >
            <p> ARC 770/Intel Core i5 12400F/INTEL Arc A770 16GB GDDR6/16GB DDR4/512GB M.2 NVMe SSD/INTEL ARC PC </p>
            <p> Product Price : 
                <strong>19.000</strong>
                <small>₺</small>
            </p>
            <div className="product__rating">
                <p>⭐</p>
                <p>⭐</p>
                <p>⭐</p>
            </div>
        </div>
        <img className='' src={require('./img/Product_Img1.png')} />
    </div>
    )
}

export default Product;