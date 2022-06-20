import React from 'react';
import './App.css';
import Balance from './components/Balance';
import MainChart from './components/MainChart';
import data from './data/data.json';

export type daysArrayType = {
    day: string;
    amount: number;
}[];

function App() {
    return (
        <div className='bg-cream flex h-screen w-full flex-col items-center sm:justify-center py-5 gap-8 font-sans font-bold'>
            <Balance bal={921.48} />
            <MainChart daysArray={data} />
        </div>
    );
}

export default App;
