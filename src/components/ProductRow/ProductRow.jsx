import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

const ProductRow = () => {
    return (
        <div className='grid grid-cols-5 items-center px-3 border-b'>
            <p className='col-span-2'>Google Pixel 4 XL</p>
            <p>50</p>
            <p>1700/-</p>
            <div>
                <button className='btn btn-ghost rounded-full'><FaRegTrashAlt /></button>
            </div>
        </div>
    );
};

export default ProductRow;