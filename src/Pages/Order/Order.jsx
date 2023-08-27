import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from '../../assets/shop/banner2.jpg';
import Cover from '../Home/Shared/Cover/Cover';
import useMenu from '../../Hooks/UseMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

 

const Order = () => {
  const categories = ['salad', 'pizza', 'soups', 'desserts', 'drinks'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
    console.log(category)
    console.log(initialIndex)



  const desserts = menu.filter(item => item.category === 'dessert');
  const soups = menu.filter(item => item.category === 'soup');
  const salads = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const drinks = menu.filter(item => item.category === 'drinks');
  
 

    return (
        <div>
          <Helmet>
              <title>Bisto Boss | order food</title>
          </Helmet>


        <Cover  img={orderImg}
        title={'OUR SHOP'}
        ></Cover>

<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList  className='mt-24 text-center text-[20px]'>
        <Tab>Salads</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soups</Tab>
        <Tab>Dessarts</Tab>
        <Tab>Drinks</Tab>
    
      </TabList>
      <TabPanel>
        <OrderTab items={salads}></OrderTab>
      </TabPanel>

      <TabPanel>
      <OrderTab items={pizza}></OrderTab>
      </TabPanel>

      <TabPanel>
      <OrderTab items={soups}></OrderTab>
      </TabPanel>

      <TabPanel>
      <OrderTab items={desserts}></OrderTab>
      </TabPanel>
      <TabPanel>
      <OrderTab items={drinks}></OrderTab>
      </TabPanel>
          
    
    </Tabs>
          
        </div>
    );
};

export default Order;