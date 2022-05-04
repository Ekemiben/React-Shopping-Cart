import React, { Component } from 'react'
import formatCurrency from '../utils'

export class Cart extends Component {
  render() {
      const {cartItems} = this.props
      console.log(cartItems)
    return (
      <div> 
          {/* Cart Header */}
          {cartItems.length === 0 ?(
              <div className = "cart cart-header">Cart is empty</div>
          ) : (
              <div className='cart cart-header'>
                  You have {cartItems.length} items in the cart {" "}
                  
                </div>
          )}

          {/* Cart Items */}
          <div className='cart'>
              <ul className='cart items'>
                  {cartItems.map(item =>(
                      <div className='linethrough'>
                      <li key={item._id}>
                          <div>
                              <img src = {item.image} alt={item.title}></img>
                          </div>
                          <div>
                            <div>{item.title} </div>
                            <div className='right btn'>
                                {formatCurrency (item.price)} {"    "} X {item.count} {" "}
                             <button className='btn remove' onClick={()=> this.props.removeFromCart(item) }>Remove</button>
                            </div>
                           
                          </div>
                          
                         
                      </li>
                      </div>
                  ))}
              </ul>

          </div>
          {cartItems.length > 0 && 
          <div className='carttotal'>
            <div className='total'>
              <div>
                Total: {" "}
                { formatCurrency(cartItems.reduce((a,c) => a + c.price * c.count, 0))} {"  "}
              </div>
            </div>
         <button className='btn-primary'>Proceed</button>

        </div>
          }
          
      </div>
    )
  }
}

export default Cart