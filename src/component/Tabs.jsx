import React from "react";

const Tabs = ({setTab,cart}) => {
  return (
 
<div className="tabs tabs-box justify-center items-center">
  <input type="radio" onClick={()=>setTab("models")} name="my_tabs_1" className="tab w-40 rounded-full " aria-label="Models" defaultChecked />
  <input type="radio" onClick={()=>setTab("card")} name="my_tabs_1" className="tab w-40 rounded-full" aria-label={`cart(${cart.length})`}  />
</div>
  );
};

export default Tabs;
