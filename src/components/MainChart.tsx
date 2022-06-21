import React, { FC } from 'react';
import { daysArrayType } from '../App';
import BarChart from './BarChart';
import Stats from './Stats';

const MainChart: FC<{
    daysArray: daysArrayType;
}> = ({ daysArray }) => {
    const total = daysArray.reduce((acc, day) => acc + day.amount, 0);
    return (
        <div className="w-mob sm:w-def h-auto bg-pale-orange rounded-xl pt-6 px-10">
            <span className="sm:text-3xl text-xl">Spendings - Last 7 days</span>
            <BarChart daysArray={daysArray} />
            <hr />
            <Stats total={total} percent={2.4} />
        </div>
    );
};

export default MainChart;
