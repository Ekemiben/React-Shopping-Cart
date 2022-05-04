import React from 'react';
import './index.css';
import data from './data.json'
import Products from './Comoponents/Products';
import Filter from './Comoponents/Filter';
import Cart from './Comoponents/Cart';

// Feature 1

class App extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         product: data.products,
         cartItems: [],
         size:"",
         sort:""
      }
    }
    removeFromCart = (item) =>{
        const cartItems = this.state.cartItems.slice();
        // console.log(cartItems)
        this.setState({
            cartItems:cartItems.filter((x) => x._id !== item._id),
           
        }, console.log(cartItems))
    }
    addToCart = (product) =>{
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach(item =>{
            if(item._id === product._id){
                item.count++;
                // alreadyInCart = true;
            }
        });
        if(!alreadyInCart){
            cartItems.push({...product, count:1})
        }
        this.setState({cartItems})
    }
    filterProducts = (event) =>{
        // console.log(event.target.value)
        if(event.target.value === ""){
            this.setState({
                size:event.target.value, 
                product:data.products
             })
        } else {
            this.setState({
                size:event.target.value,
                product:data.products.filter((product) => product.avalaibleSize.indexOf(event.target.value) >=0 )
              
            })
            console.log(event.target.value)
        }
       

    }
    sortProducts = (event) =>{
        // console.log(event.target.value)

        const sort = event.target.value;
        this.setState((state) =>({
            sort:sort,
            product:this.state.product.slice().sort((a,b)=>(
                sort === "lowest"? 
                ((a.price > b.price)? 1:-1): sort === "highest"?
                ((a.price < b.price)? 1: -1):
                ((a._id < b._id)? 1: -1)
            ))
        }))
    }
    
    render(){
        return (
            <div className='grid-container'>
                <header>
                    <a href='/'>Shoping Cart</a>
                </header>
                <main>
                    <div className='content'>
                        <div className='main'>
                            <Filter count={this.state.product.length} 
                            size={this.state.size}
                            sort={this.state.sort}
                            filterProducts={this.filterProducts}
                            sortProducts = {this.sortProducts}
                            ></Filter>
                            <Products products = {this.state.product}
                            addToCart = {this.addToCart}
                            ></Products>
                        </div>
                        <div className='cart sidebar'>
                            <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
                        </div>
                    </div>
                </main>
                <footer>All right reserved </footer>
        
            </div>
          )

    }

 
}

export default App