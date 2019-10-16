import React, { Component } from "react";

import { linkData } from "./linkData";
import { socialData } from "./socialData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 9,
    links: linkData,
    socialIcons: socialData,
    cart: []
  };

  //handle Sidebar
  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  };

  //handle SideCart
  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    });
  };

  //close cart
  closeCart = () => {
    this.setState({
      cartOpen: false
    });
  };

  //open cart
  openCart = () => {
    this.setState({
      cartOpen: true
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider, ProductContext };
