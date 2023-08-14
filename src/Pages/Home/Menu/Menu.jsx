import React from 'react';
import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'


const Menu = () => {
    return (
        <div>
            <Helmet>
              <title>Bisto Boss | menu</title>
          </Helmet>
          <Cover img={menuImg} 
              title={'OUR MENU'}
          ></Cover>
          
        </div>
    );
};

export default Menu;