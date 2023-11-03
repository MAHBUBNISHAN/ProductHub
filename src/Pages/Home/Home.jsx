import React from 'react';
import Slider from '../Slider/Slider';
import useProduct from '../../Hooks/useProduct';
import Category from '../../Category/Category';

const Home = () => {
    const [product]=useProduct();
    const pran = product.filter(item=>item.company==='PRAN');

    return (
        <div className=' m-10'>
            <div>
       {
        pran.map(item=>
        <Category 
        item={item}>

        </Category>)
       }
            </div>
          <Slider></Slider>
        </div>
    );
};

export default Home;