import React, { Component } from 'react'
import Card from './Card'

export class AllData extends Component {
   render() {
      const {items}=this.props;
      return (
         <>
         <div className="container p-4 bg-light">
                <div className="row">
                     {items.map((item,index)=>{
                         return(
                             <>
                                <Card src={item.src} title={item.title} />
                             </>
                         )
                     })}


             
                </div>
             </div>
             </>
      )
   }
}

export default AllData
