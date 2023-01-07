/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function Header() {
    return (
      <div className='header'>
  
        {/*Header Logo */}
        <img className='header__logo' src={require('./img/TECHSUP_icon_transparent.png')} />

        {/*Search Bar */}
        <div className='header__search'>
            <input className='header__searchInput'
            type= 'text'/>
            {/* Logo */}
            <SearchIcon className='header__searchIcon'/>
            
                  
        </div>
        {/* Sign-in / Sign-out catalogs on header */}
          <div className='header__nav'>

              <div className='header__option' >
                  <span className='header__optionLineOne'>
                      Hello Guest 
                  </span>
                  <span className='header__optionLineTwo'>
                      Sign In
                  </span>
              </div>
  
              <div className='header__option' >
                  <span className='header__optionLineOne'>
                      Returns
                  </span>
                  <span className='header__optionLineTwo'>
                       & Orders
                  </span>
              </div>
              
              <div className='header__option' >
                <span className='header__optionLineOne'>
                      Your 
                </span>
                <span className='header__optionLineTwo'>
                     Prime
                </span>
              </div>
                <div className='header__optionBasket'>
                    <ShoppingBagIcon className=''/>
                    <span className='header__optionBasket header__basketCount'>
                        0
                    </span>
                </div>

          </div>
      </div>
    )
  }
  
  export default Header