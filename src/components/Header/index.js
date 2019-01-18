import React from 'react';
import CSS from './Header.css';

//Static function for header - For not rendering it not unnecessary
const Header = () => {
  return <div className={CSS.Header}>
            <h1 className={CSS.title}>
              Costume Layout
            </h1>
          </div>
};
export default Header;