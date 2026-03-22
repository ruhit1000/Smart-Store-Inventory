import React from 'react';
import ProductRow from '../ProductRow/ProductRow';

const ShowProducts = ({ allProducts }) => {
    return (
        <div className='mx-2'>
            <div className='grid grid-cols-5 bg-primary text-white p-2 mt-2 rounded-t-lg'>
                <h4 className='col-span-2'>Product Name:</h4>
                <h4>Quantity:</h4>
                <h4>Price:</h4>
                <h4>Action:</h4>
            </div>
            {
                allProducts.length > 0 ? (
                    <div className='h-[80vh] bg-base-200 rounded-b-lg overflow-y-auto'>
                        {
                            allProducts.map((product) => <ProductRow key={product.name} product={product} />)
                        }
                    </div>
                ) : (
                   <div className='text-center mt-10'>
                        <h1 className='font-bold text-2xl'>Add some products to your inventory first!</h1>
                   </div>
                )
            }
        </div>
    );
};

export default ShowProducts;
{/*  */ }