import React, { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({models, cart, setCart}) => {
   
    const solidModels=use(models)
    console.log(solidModels,"models")
    return (
        <div className='py-20'>
            <h1 className=' text-5xl font-black text-center'>Choose Your AI Model</h1>
            <h2 className='text-3xl font-bold text-gray-500 text-center'>One subscription gives you access to all frontier AI models</h2>
            <div className="mt-5 justify-content shadow-2xl grid md:grid-cols-2 lg:grid-cols-3 text-center items-center justify-center gap-3 p-4 mx-auto max-w-7xl">
                {
                    solidModels.map((model,index)=> <ModelCard key={index} model={model} cart={cart} setCart={setCart} ></ModelCard>)
                }
            </div>
        </div>
    );
};

export default Models;