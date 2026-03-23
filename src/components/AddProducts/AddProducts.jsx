import React from 'react';

const AddProducts = ({ handleNewProduct, allProducts }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries())
        if (data.name.trim() === '') {
            alert('Please insert a product name')
            return;
        }
        
        const existingProduct = allProducts.find((product) => product.name.toLowerCase().trim().replaceAll(' ', '') === data.name.toLowerCase().trim().replaceAll(' ', ''))
        if (existingProduct) {
            alert('Product Already Exists');
            return;
        } else {
            const newProduct = {
                name: data.name,
                price: parseInt(data.price),
                quantity: parseInt(data.quantity)
            }
            handleNewProduct(newProduct)
            e.target.reset();
        }
    }


    return (
        <div className='p-5'>
            <h1 className='font-bold text-2xl text-primary'>Add Your Product to Inventory</h1>
            <div className='card bg-base-200 w-full h-75 mt-10 p-3'>
                <h3 className='font-bold text-xl mb-3'>Add Product</h3>
                <form onSubmit={handleSubmit} className='space-y-2' action="">
                    <input name='name' type="text" placeholder="Product Name" class="input" required/>
                    <input name='quantity' type="number" placeholder="Quantity" class="input" required/>
                    <input name='price' type="number" placeholder="Price" class="input" required/> <br />
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;