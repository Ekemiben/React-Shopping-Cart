import React, { Component } from 'react'
import formatCurrency from '../utils'

export class Products extends Component {
  render() {
    return (
      <div>
          <ul className='products'>
              {this.props.products.map((pro) =>(
                 <li  key={pro._id}>
                     <div className='product'>
                         <a href={"#" + pro._id}>
                             <img src={pro.image} alt={pro.title} ></img>
                             <p>{pro.title}</p>
                         </a>
                         <div className='product-price'> 
                             <div>
                                 {formatCurrency (pro.price)}
                             </div>
                             <button onClick={()=> this.props.addToCart(pro)} className='btn-primary' >Add To Cart</button>
                         </div>
                     </div>
                 </li> 
              ))}
          </ul>
      </div>
    )
  }
}

export default Products