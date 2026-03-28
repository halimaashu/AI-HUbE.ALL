import React, { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, cart, setCart }) => {
  const [subscribe, setSubscribe] = useState(false);
  console.log(model);
  const handleSubscribe = () => {
    setSubscribe(true);

const isFound=cart.find(item=>item.id===model.id);
if(isFound){
    toast.error(`${model.title} AI is already in the cart !!`); 
    return;
}

    setCart([...cart, model]);
    toast.success(`${model.title} AI has been added !!`);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm mx-auto h-full">
      <figure className="bg-zinc-100 rounded-md p-5">
        <img
          src={model.image}
          className="object-contain h-40 w-40 rounded-full"
          alt="Shoes"
        />
      </figure>
      <div className="card-body space-y-4">
        <h2 className="card-title text-4xl font-bold">{model.title}</h2>
        <p className="text-left  text-gray-500">{model.description} </p>
        <h2 className="text-left text-2xl text-gray-500">
          <span className={`font-bold text-black text-3xl ${model.price === 0 ? 'text-green-500' : ''}`}>
            {model.price === 0 ? "Free" : `$${model.price}/month`}
          </span>
        </h2>
        <div className="card-actions justify-center">
          <button
            onClick={handleSubscribe}
            className="btn bg-red-500 py-1.5 rounded-lg w-full text-white"
          >
            {subscribe ? "Subscribed" : "Subscribe Naw"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
