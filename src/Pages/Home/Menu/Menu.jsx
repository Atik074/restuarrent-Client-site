import React from 'react';
import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item =>item.category == 'offered')
    const desserts = menu.filter(item =>item.category == 'dessert')
    const pizza = menu.filter(item =>item.category == 'pizza')
    const salads = menu.filter(item =>item.category == 'salad')
    const soups = menu.filter(item =>item.category == 'soup')
    return (
        <div>
            <Helmet>
              <title>Bisto Boss | menu</title>
          </Helmet>
          <Cover img={menuImg} 
              title={'OUR MENU'}
          ></Cover>
          <SectionTitle
            subheading={"---Don't miss---"}
            heading={"TODAY'S OFFER"}
          >
          </SectionTitle>
          {/* offered menu item */}
          <MenuCategory items={offered}></MenuCategory>

          {/* dessert menu item*/}
          <MenuCategory 
            items={desserts} title={'desserts'} img={dessertImg}>
          </MenuCategory>

          {/* pizza menu item*/}
          <MenuCategory items={pizza}
            title={'pizza'}
            img={pizzaImg}
          ></MenuCategory>

            {/* salads menu item*/}
            <MenuCategory items={salads}
            title={'salads'}
            img={saladImg}
          ></MenuCategory>

             {/* soups menu item*/}
             <MenuCategory items={soups}
            title={'soups'}
            img={soupImg}
          ></MenuCategory>
          
          
        </div>
    );
};

export default Menu;