import React from 'react';
import Slider from '../Slider/Slider';
import useProduct from '../../Hooks/useProduct';
import Category from '../../Category/Category';

const Home = () => {
    

    return (
        <div className=' m-10'>
            
          <Slider></Slider>
          <Category></Category>
        </div>
    );
};

export default Home;