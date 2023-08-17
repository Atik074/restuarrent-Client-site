import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from '../../assets/shop/banner2.jpg';
import Cover from '../Home/Shared/Cover/Cover';
import useMenu from '../../Hooks/UseMenu';

 

const Order = () => {
    const [menu] = useMenu()
    const [tabIndex, setTabIndex] = useState(0);

    const offered = menu.filter(item =>item.category == 'offered')
    const desserts = menu.filter(item =>item.category == 'dessert')
    const pizza = menu.filter(item =>item.category == 'pizza')
    const salads = menu.filter(item =>item.category == 'salad')
    const soups = menu.filter(item =>item.category == 'soup')

    return (
        <div>
        <Cover  img={orderImg}
        title={'OUR SHOP'}
        ></Cover>

<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salads</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soups</Tab>
        <Tab>Dessarts</Tab>
        <Tab>Drinks</Tab>
    
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
          
        </div>
    );
};

export default Order;