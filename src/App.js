import React from 'react';
import './index.css';
import data from './data.json'
import Products from './Comoponents/Products';

// Feature 1

class App extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         product: data.products,
         size:"",
         sort:""
      }
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
                        <Products products = {this.state.product}></Products>
                    </div>
                    <div className='cart sidebar'>Cart Items</div>
                    </div>
                </main>
                <footer>All right reserved </footer>
        
            </div>
          )

    }

 
}

export default App