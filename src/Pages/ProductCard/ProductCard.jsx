import React from 'react';
import Rating from 'react-rating';
import ReactStars from 'react-rating-star-with-type'

const ProductCard = ({item}) => {
    const {name,img,price,ratings}=item;
    const onChange=(nextValue)=>{
        setStar(nextValue)}
    return (
        <div>
            <div className="card card-compact w-full h-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" className='w-[200px] h-[200px]' /></figure>
        <div className="card-body">
        <h2 className="card-title text-sky-600">{name}</h2>
        <div className="card-actions justify-between">
            <div>
                <p className=' text-md'>price: <span className=' text-teal-700'>{price} </span> tk</p>
                <div>
                <ReactStars 
    onChange={onChange} 
    value={ratings}  
    edit={true}  
    activeColors={[ "red", "orange", "#FFCE00", "#9177FF","#8568FC",]} 
    />
                </div>
            </div>
      <button className="btn btn-primary">Add To Cart</button>
        </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;