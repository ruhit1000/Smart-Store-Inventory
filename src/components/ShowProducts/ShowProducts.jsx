import React, { useState } from 'react';
import ProductRow from '../ProductRow/ProductRow';

const ShowProducts = ({ allProducts, ...rest }) => {
    const [filterClicked, setFilterClicked] = useState(false)

    let productsToShow = allProducts

    const handleStockL2H = () => {
        setFilterClicked(!filterClicked)
        productsToShow = allProducts.sort((a, b) => a.quantity - b.quantity)
    }
    const handleStockH2L = () => {
        setFilterClicked(!filterClicked)
        productsToShow = allProducts.sort((a, b) => b.quantity - a.quantity)
    }
    const handlePriceL2H = () => {
        setFilterClicked(!filterClicked)
        productsToShow = allProducts.sort((a, b) => a.price - b.price)
    }
    const handlePriceH2L = () => {
        setFilterClicked(!filterClicked)
        productsToShow = allProducts.sort((a, b) => b.price - a.price)
    }


    return (
        <div className='mx-2'>
            <div className='grid grid-cols-5 bg-primary text-white p-2 mt-2 rounded-t-lg'>
                <h4 className='col-span-2'>Product Name:</h4>
                <h4>Quantity:</h4>
                <h4>Price:</h4>
                <div className='flex justify-between items-center'>
                    <h4>Action:</h4>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">Filter</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-black">
                            <li><button onClick={handleStockL2H}>Stock: Low to High</button></li>
                            <li><button onClick={handleStockH2L}>Stock: High to Low</button></li>
                            <li><button onClick={handlePriceL2H}>Price: Low to High</button></li>
                            <li><button onClick={handlePriceH2L}>Price: High to Low</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            {
                productsToShow.length > 0 ? (
                    <div className='h-[80vh] bg-base-200 rounded-b-lg overflow-y-auto'>
                        {
                            productsToShow.map((product) =>
                                <ProductRow
                                    key={product.name}
                                    product={product}
                                    {...rest}
                                />)
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