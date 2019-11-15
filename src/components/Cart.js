import React, { Component } from 'react';
import CartItem from './CartItem';
import Total from './Total';

class Cart extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <CartItem selected={this.props.selected} />
        <Total selected={this.props.selected} />
      </section>
    );
  }
}

export default Cart;

