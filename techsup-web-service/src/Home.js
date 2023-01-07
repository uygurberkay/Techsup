/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Home.css';
import Product from './Product'

function Home(){
    return(
        <div className="home" >
            <div className="home__container">
                <img className="home__image" src={require('./img/MainPage_Pt1.png')} />
                {/*<img className="home__image" src={require('./img/MainPage_Pt2.png')} />
                <img className="home__image" src={require('./img/MainPage_Pt3.png')} />
                <img className="home__image" src={require('./img/MainPage_Pt4.png')} />
                <img className="home__image" src={require('./img/MainPage_Pt5.png')} /> */}
            </div><div className="home__row" >
                {/* Product */}
                <Product title='ARC 770/Intel Core i5 12400F/INTEL Arc A770 16GB GDDR6/16GB DDR4/512GB M.2 NVMe SSD/INTEL ARC PC'
                price='19.000' image='./img/Product_Img1.png' rating={4}/>
                {/* Product */}
                <Product />
            </div><div className="home__row" >
                {/* Product */}
                <Product />
                {/* Product */}
                <Product />
                {/* Product */}
                <Product />
            </div><div className="home__row" >
                {/* Product */}
                <Product /> 
            </div>
        </div>
    )
}
export default Home