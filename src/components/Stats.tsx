import React, { FC } from 'react';
const Stats: FC<{
    total: number;
    percent: number;
}> = ({ total, percent }) => {
    return (
        <div className='justify-between my-10 flex items-center'>
            <div className="flex flex-col">
                <div className='font-extralight text-sm text-medium-brown'>Total this month</div>
                <div className="sm:text-5xl text-3xl font-bold text-dark-brown">${total.toFixed(2)}</div>
            </div>
            <div className="flex flex-col">
                <div className="sm:text-xl text-end font-bold text-dark-brown">+{percent}%</div>
                <div className='font-extralight text-sm text-end text-medium-brown'>from last month</div>
            </div>
        </div>
    );
};
export default Stats;
