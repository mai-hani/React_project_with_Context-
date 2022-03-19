import React,{useContext} from 'react'
import { CartContext } from './CartContext';

const CardCount = () => {
  const [cart, setCart] = useContext(CartContext);
  //const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  console.log(cart);
  return (
    <>
      <div className="navbar-text mx-5">
        <h4>Count :{cart.length}</h4>
      </div>
    </>
  )
}
export default CardCount; 