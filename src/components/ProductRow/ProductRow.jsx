import React, { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const ProductRow = ({ product }) => {
    const [productQuantity, setProductQuantity] = useState(parseInt(product.quantity))
    const handleAddProduct = () => setProductQuantity(productQuantity + 1)
    const handleRemoveProduct = () => productQuantity > 0 && setProductQuantity(productQuantity - 1)

    return (
        <div className='grid bg-base-300 grid-cols-5 items-center px-3 border-b'>
            <p className='col-span-2'>{product.name}</p>
            <div className='flex gap-2 items-center'>
                <button onClick={handleRemoveProduct} className='cursor-pointer'><FaMinus /></button>
                <p>{productQuantity}</p>
                <button onClick={handleAddProduct} className='cursor-pointer'><FaPlus /></button>
            </div>
            <p>{product.price}/-</p>
            <div>
                <button className='btn btn-ghost rounded-full'><FaRegTrashAlt /></button>
            </div>
        </div>
    );
};

export default ProductRow;