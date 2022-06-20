import React, { FC } from 'react';
import { daysArrayType } from '../App';

const BarChart: FC<{
    daysArray: daysArrayType;
}> = ({ daysArray }) => {
    const nowDate = new Date();
    return (
        <div className='sm:mt-10 sm:mb-2 sm:py-3 py-3 my-5 flex flex-row items-end justify-around'>
            {daysArray.map((day, index) => {
                const isDay = nowDate.getDay() === index - 6;
                const height = `${(day.amount * 4).toFixed()}px`;
                return (
                    <div className='flex flex-col items-center relative' key={index}>
                        <div
                            className={`peer ${isDay ? 'bg-cyan' : 'bg-soft-red'} sm:w-14 w-8 flex flex-col justify-end rounded-md hover:opacity-70 cursor-pointer`}
                            style={{ height }}
                        />
                        <div className='z-10 flex justify-center text-white bg-dark-brown items-center text-xs sm:text-lg text-center sm:py-4 sm:px-10 px-2 py-1 sm:w-full w-[56px] h-10 rounded-lg absolute -top-12 origin-bottom invisible peer-hover:visible'>${day.amount}</div>
                        <div className='sm:text-sm text-xs text-center font-extralight text-medium-brown'>{day.day}</div>
                    </div>
                );
            })}
        </div >
    );
};
export default BarChart;
