import React from 'react';

const AddProducts = () => {
    return (
        <div className='p-5'>
            <h1 className='font-bold text-2xl text-primary'>Add Your Product to Inventory</h1>
            <div className='card bg-base-200 w-full h-75 mt-10 p-3'>
                <h3 className='font-bold text-xl mb-3'>Add Product</h3>
                <form className='space-y-2' action="">
                    <input type="text" placeholder="Product Name" class="input" />
                    <input type="number" placeholder="Quantity" class="input" />
                    <input type="number" placeholder="Price" class="input" />
                    <button className='btn btn-primary w-full'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;