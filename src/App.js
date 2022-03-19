import Body from './Components/Body'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import  AllData from './Components/AllData'
import React, { Component } from 'react'
import Footer from './Components/Footer'
import img1 from './photos/pexels-fauxels-3183198.jpg'
import img2 from './photos/pexels-giftpunditscom-1310534.jpg'
import img3 from './photos/pexels-josh-sorenson-1334597.jpg'
import img4 from './photos/pexels-pixabay-221185.jpg'
import img5 from './photos/pexels-cottonbro-5076531.jpg'
import img6 from './photos/pexels-vlada-karpovich-4050315.jpg'
import { CartProvider } from './Components/CartContext'
export class App extends Component {
  state ={
    items:[
      {id:1,cat:'Phone',src:img1,title:"Phone"},
      {id:1,cat:'Phone',src:img2,title:"Phone"},
      {id:1,cat:'Tablet',src:img3,title:"Tablet"},
      {id:1,cat:'Tablet',src:img4,title:"Tablet"},
      {id:1,cat:'Laptop',src:img5,title:"Laptop"},
      {id:1,cat:'Laptop',src:img6,title:"Laptop"},
    ],
    productCopy:[]
  }
  //filter data
  handelBtns=(e)=>{
    console.log(e.target.value)
    let productCopy;
    if(e.target.value==="All"){
      productCopy=this.state.items;
    }
    else{
      productCopy=this.state.items.filter(item=>item.cat===e.target.value)
    }
    this.setState({
      productCopy:productCopy
    })
  }
  render() {
    return (
      <CartProvider>
       <div>
        <Navbar/>
        <Slider/>
        <Body handelBtns={this.handelBtns}/>
        <AllData items={this.state.productCopy} />
        <Footer/>
       </div>
       </CartProvider>
    )
  }
}

export default App

