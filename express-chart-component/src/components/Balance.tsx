import React, { FC } from 'react';
import logo from '../assets/logo.svg';

const Balance: FC<{
    bal: number;
}> = ({ bal }) => {
    return (
        <div className='bg-soft-red flex h-28 justify-between rounded-xl py-4 px-8 w-mob sm:w-def text-white'>
            <div className='flex flex-col justify-around'>
                <div className='text-md font-extralight text-gray-100'>My Balance</div>
                <div className='text-3xl font-semibold'>${bal}</div>
            </div>
            <div className='flex items-center'>
                <img src={logo} />
            </div>
        </div>
    );
};

export default Balance;
