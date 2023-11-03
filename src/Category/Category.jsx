import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProduct from '../Hooks/useProduct';
import ProductCard from '../Pages/ProductCard/ProductCard';

const Category = ({item}) => {
    const [tabIndex, setTabIndex]=useState(0);
    const [product]=useProduct();
    const Pran = product.filter(item=>item.company==='PRAN');
    const Nastle = product.filter(item=>item.company==='Nestle');
    const Uniliver = product.filter(item=>item.company==='Uniliver');
    const Marico= product.filter(item=>item.company==='Marico');

    return (
        <div className='m-10'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>Pran</Tab>
                <Tab>Nastle</Tab>
                <Tab>Uniliver</Tab>
                <Tab>Marico</Tab>
            </TabList>
                <TabPanel>
                   <div className='grid md:grid-cols-3 gap-10'>
                   {
                        Pran.map(item=><ProductCard
                        item={item}
                        ></ProductCard>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10'>
                {
                        Nastle .map(item=><ProductCard
                        item={item}
                        ></ProductCard>)
                    } 
                </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10'>
                {
                        Uniliver.map(item=><ProductCard
                        item={item}
                        ></ProductCard>)
                    }
                </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10'>
                {
                        Marico.map(item=><ProductCard
                        item={item}
                        ></ProductCard>)
                    }
                </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;