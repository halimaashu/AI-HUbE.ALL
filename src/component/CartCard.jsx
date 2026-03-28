import React from 'react';

const CartCard = ({ cartItem, cart, setCart }) => {
    const handleDelete=(cartItem)=>{
        // console.log(cartItem)
        const newCart=cart.filter(item=>item.id!==cartItem.id)
        setCart(newCart)

    }
    return (
        <div className='border mx-auto md:flex justify-between p-6 rounded-lg items-center bg-base-100 shadow-xl hover:border-red-500'>
            <div className="md:flex items-center">
                <img src={cartItem.image} className='w-[75px] mr-3' alt={cartItem.title} /> 
            <div className="">
                <p className='text-3xl font-bold'>{cartItem.title}</p> 
            <p className='text-gray-600'>{cartItem.description}</p>
            </div>
            
            </div>
            <div className="flex justify-center items-center gap-3">
                <h1 className={`text-4xl font-bold ${cartItem.price===0?'text-green-500':'text-black'}`}>{cartItem.price===0? "Free" : `$${cartItem.price}`}</h1>
                <button onClick={()=>handleDelete(cartItem)} className='btn text-red-500'>X</button>
        </div>
            </div>
    );
};

export default CartCard;