import React from 'react';
import ProductRow from '../ProductRow/ProductRow';

const ShowProducts = ({allProducts}) => {
    return (
        <div className='ml-2'>
            <div className='grid grid-cols-5 bg-primary text-white p-2 mt-2 rounded-t-lg'>
                <h4 className='col-span-2'>Product Name:</h4>
                <h4>Quantity:</h4>
                <h4>Price:</h4>
                <h4>Action:</h4>
            </div>
            <div className='h-screen bg-base-200 overflow-y-auto'>
                {
                    allProducts.map((product) => <ProductRow key={product.name} product={product} />)
                }
            </div>
        </div>
    );
};

export default ShowProducts;