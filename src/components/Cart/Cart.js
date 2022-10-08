import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveItem}) => {

      let message;
      if(cart.length === 0){
         message = <p> Please bye at least one item !!!</p>
      } 
      else if(cart.length === 1){
        message = <div>
            <h3>Amar jonno ekta nau</h3>
            <p>Tomar nejer jonno r ekta nau</p>
            <p><small>Amar jonno ro nau</small></p>
        </div>
      }
      else{
        message = <p>Thanks for buying !!!</p>
      }

    return (
        <div>
            <h2 className={cart.length === 2 ? 'orange': 'purple'}>Order Summary</h2>
            <p className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order Quantity {cart.length}</p>
            {
                cart.map(tshirt=><p
                key={tshirt._id}> 
                {tshirt.name}
                <button onClick={() => handleRemoveItem(tshirt)}>X</button></p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>3 jonk k gift deba? wow !!</p> : <p> Bye more</p>
            }

            <p>And operator</p>
            {
                cart.length === 2 && <h4>Double Items</h4>
            }
            <p>Or operator</p>
            {
                cart.length === 4 || <h4> Charta Items na</h4>
            }
        </div>
    );
};

export default Cart;