/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

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
            
                  
        </div>
        {/* Sign-in / Sign-out catalogs on header */}
          <div className='header__nav'>
              <div className='header__option' >
                  <span className='header_optionLineOne'>
                      Hello Guest 
                  </span>
                  <span className='header_optionLineTwo'>
                      Sign In
                  </span>
              </div>
  
              <div className='header__option' >
                  <span className='header_optionLineOne'>
                      Returns
                  </span>
                  <span className='header_optionLineTwo'>
                       & Orders
                  </span>
              </div>
              
              <div className='header__option' >
              <span className='header_optionLineOne'>
                      Your 
                  </span>
                  <span className='header_optionLineTwo'>
                      Prime
                  </span>
              </div>
          </div>
      </div>
    )
  }
  
  export default Header