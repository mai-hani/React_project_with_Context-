import React from 'react'
import 'jquery'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.css'
const Body = (props) => {
  return (
    <>
      <div className="container-fluid mx-auto">
        <div className="mx-auto" style={{width: 200}}>
           <h1>Products</h1>
        </div>
        <div className="container-fluid mx-2">
              <button value="All" onClick={props.handelBtns} className="col-md-2 btn btn-dark m-1">All</button>
              <button value="Phone" onClick={props.handelBtns} className="col-md-3 btn btn-dark m-1">Phone</button>
              <button value="Laptop" onClick={props.handelBtns} className="col-md-3 btn btn-dark m-1">Laptop</button>
              <button value="Tablet" onClick={props.handelBtns} className="col-md-3 btn btn-dark m-1">Tablet</button>
        </div>       
      </div>
    </>
  )
}

export default Body
