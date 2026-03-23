import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const ProductRow = ({ product, handleDelete, productsQuantityUpdate }) => {
    const handleAddProduct = (productName) => {
        const updatedQuantity = product.quantity + 1
        productsQuantityUpdate(updatedQuantity, productName)
    }

    const handleDecreaseProduct = (productName) => {
        if (product.quantity > 0) {
            const updatedQuantity = product.quantity - 1;
            productsQuantityUpdate(updatedQuantity, productName)
        }
    }


    return (
        <div className='grid bg-base-300 grid-cols-5 items-center px-3 border-b'>
            <p className='col-span-2'>{product.name}</p>
            <div className='flex gap-2 items-center'>
                <button onClick={() => handleDecreaseProduct(product.name)} className='cursor-pointer'><FaMinus /></button>
                <p>{product.quantity}</p>
                <button onClick={() => handleAddProduct(product.name)} className='cursor-pointer'><FaPlus /></button>
            </div>
            <p>{product.price}/-</p>
            <div>
                <button onClick={() => handleDelete(product.name)} className='btn btn-ghost rounded-full'><FaRegTrashAlt /></button>
            </div>
        </div>
    );
};

export default ProductRow;