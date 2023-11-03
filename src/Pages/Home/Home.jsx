import React from 'react';
import Slider from '../Slider/Slider';
import useProduct from '../../Hooks/useProduct';
import Category from '../../Category/Category';

const Home = () => {
    

    return (
        <div className=' m-10'>
            
          <Slider></Slider>
          <div>
            <h3 className='text-5xl m-20'> Grab Your <span className=' text-yellow-500'>Product</span>  With <br /> Renewable <span className=' font-bold text-teal-600'>Company </span> </h3>
          </div>
          <Category></Category>
        </div>
    );
};

export default Home;