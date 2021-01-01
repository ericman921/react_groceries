const products = [
          {item: 'Beers',brand: 'Sapporo',units: '6-pack',quantity: 1,isPurchased: false},
          {item: 'Spirits',brand: 'Grey Goose',units: '32oz',quantity: 1,isPurchased: false},
          {item: 'Spirits',brand: 'Jack Daniels',units: '32oz',quantity: 1,isPurchased: false}      
]

class App extends React.Component{
          constructor(props) {
                    super(props);
                    this.state = {
                              products: products,
                              item: '',
                              brand: '',
                              units: '',
                              quantity: 0,
                              cartItems: [],
                    }
                    this.addToCart = this.addToCart.bind(this);
          }

          handleChange = (event) => {
                    this.setState({[event.target.id]: event.target.value})
          }

          handleSubmit = (event) => {
                    event.preventDefault()
                    const newItem = {
                              item: this.state.item,
                              brand: this.state.brand,
                              units: this.state.units,
                              quantity: this.state.quantity,
                    }
                    this.setState({
                              products: [newItem, ...this.state.products],
                              item: '',
                              brand: '',
                              units: '',
                              quantity: 0,
                    })
          }

          addToCart(item) {
                    this.setState({ cartItems: [item, ...this.state.cartItems] });
          }
          
          render() {
                    return (
                            <div>
                                        <h3> Grocery Store </h3>
                                        {console.log(this.state.products)}
                                        <form onSubmit ={this.handleSubmit}>
                                                  <label>Item: </label>
                                                  <input type='text' value={this.state.item} placeholder='Item' onChange={this.handleChange} id='item'></input><br></br>
                                                  <label>Brand: </label>
                                                  <input type='text' value={this.state.brand} placeholder='Brand' onChange={this.handleChange} id='brand'></input><br></br>
                                                  <label>Units: </label>
                                                  <input type='text' value={this.state.units} placeholder='Units' onChange={this.handleChange} id='units'></input><br></br>
                                                  <label>Quantity: </label>
                                                  <input type='text' value={this.state.quantity} onChange={this.handleChange} id='quantity'></input><br></br>
                                                  <input type='submit' />
                                        </form>
                                        <h3>Available Products</h3>
                                        <ul>
                                                  {
                                                            this.state.products.map(product => 
                                                            // {console.log(product)}
                                                            {
                                                                      return (
                                                                                <div> 
                                                                                          <ProductList product={ product } handleAdd={ this.addToCart }/><br></br>
                                                                                </div>
                                                                      )} 
                                                            // (          <div>
                                                            //                     <li>{product.item}: {product.brand}
                                                            //                               <ul>{product.units}</ul>
                                                            //                     </li>
                                                            //           </div>
                                                            // )
                                                            )
                                                  }
                                        </ul>

                                        <div>
                                                  <h3> Shopping Cart </h3>
                                                  <ul>
                                                            {
                                                                      this.state.cartItems.map(cartItem => <ProductList product={ cartItem } />)
                                                            }
                                                  </ul>
                                        </div>
                            </div>
                    )
            }
}

ReactDOM.render(<App />, document.getElementById('container'));
