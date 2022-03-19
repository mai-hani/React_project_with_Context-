import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-light">
          <div className="row text-center">
              <h5>All Rights Reseved by ITI</h5>
                <h3><FaFacebookSquare/> <FaTwitterSquare/> <FaInstagramSquare/></h3>
          </div>
      </div>
    </>
  )
}

export default Footer
