import React,{useContext} from 'react'
import { CartContext } from './CartContext';

const CartCount = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const count = { title: props.title, src: props.src };
    setCart(currentState => [...currentState, count]);
  }
  return (
    <>
      <div className="card" style={{width: '23rem'}}>
        <img src={props.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" onClick={addToCart} className="btn btn-primary" >add to cart</a>
        </div>
      </div>
    </>
  )
}

export default CartCount
