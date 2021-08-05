import React from 'react';
import { useState } from 'react';


function Basket() {
    const [BasketItems, setBasketItems] = useState([]);
    const AddItems = (product) => {
    const exist = BasketItems.find((x) => x.id === product.id);
    if (exist) {
      setBasketItems(
        BasketItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setBasketItems([...BasketItems, { ...product, qty: 1 }]);
    }
  };
  const RemoveItems = (product) => {
    const exist = BasketItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setBasketItems(BasketItems.filter((x) => x.id !== product.id));
    } else {
      setBasketItems(
        BasketItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
    return (
        <>
        <h2>Basket Items</h2>
        <div>
        {BasketItems.length === 0 && <div>Basket is empty</div>}
        </div>
        <div>
            <span id={BasketItems}></span>
            <button onclick={AddItems} className="add">Add item</button>
           
            <buton onclick ={RemoveItems}className="remove">Remove item</buton>
        </div>       
      </>
    )
}

export default Basket;
