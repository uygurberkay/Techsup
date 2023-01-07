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
                <Product />
                {/* Product */}
            </div><div className="home__row" >
                {/* Product */}
                {/* Product */}
                {/* Product */}
            </div><div className="home__row" >
                {/* Product */}
            </div>
        </div>
    )
}
export default Home