class ShoppingCart extends React.Component {
          constructor(props) {
            super(props);
          }
          render() {
            return (
              <li>{ this.props.product.item } { this.props.product.brand } { this.props.product.units } { this.props.product.quantity }</li>
            )
          }
        }