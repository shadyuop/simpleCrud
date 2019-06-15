import React, {Component} from 'react';
import './App.css';

import ProductItem from './product-item'
import AddItem from './AddItem'

const products = [
  {
    name: 'ipad',
    price: 200
  },
  {
    name: 'iphone',
    price: 650
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
     products: JSON.parse(localStorage.getItem('products'))
    };
   
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const products = this.getProducts();
    this.setState({products});
  }

  getProducts() {
    return this.state.products;
  }

  onDelete(name) {
    const products = this.getProducts();

    const filteredProducts = products.filter(product=>{
      return product.name !== name;
    });

    this.setState({products:filteredProducts});
    console.log(filteredProducts);
  }

  onAdd(name,price) {
    const products = this.getProducts();
    products.push({name, price});
    console.log(products);
    this.setState({products})
  }

  onEditSubmit(newName, newPrice, name) {
    let products = this.getProducts();

    products = products.map(product => {
      if (product.name === name) {
        product.name = newName;
        product.price = newPrice;
      }

      return product;
    });

    this.setState({products});
  }
 
  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>
        <AddItem
          onAdd={this.onAdd}
        ></AddItem>

        {
          this.state.products.map(product => {
            return (
              <ProductItem
                key={product.name}
                {...product}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              ></ProductItem>
            );
          })
        }
      </div>
    );
  }
}

export default App;
