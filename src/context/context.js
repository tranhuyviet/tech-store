import React, { Component } from "react";

import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { items } from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true
  };

  componentDidMount() {
    this.setProducts(items);
  }

  //set products
  setProducts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    //console.log(storeProducts);

    //featured products
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    //console.log(featuredProducts);

    this.setState(
      {
        storeProducts,
        filteredProducts: storeProducts,
        featuredProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false
      },
      () => {
        this.addTotals();
      }
    );
  };

  //get cart from local storage
  getStorageCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };

  //get single product from local storage
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };

  //get totals
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });

    subTotal = parseFloat(subTotal.toFixed(2));

    let tax = subTotal * 0.24;
    tax = parseFloat(tax.toFixed(2));

    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));

    return {
      cartItems,
      subTotal,
      tax,
      total
    };
  };

  //add totals
  addTotals = () => {
    const total = this.getTotals();

    this.setState({
      cartItems: total.cartItems,
      cartSubTotal: total.subTotal,
      cartTax: total.tax,
      cartTotal: total.total
    });
  };

  //sync storage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  //add to cart
  addToCart = id => {
    //console.log("add to cart", id);
    let cartTemp = [...this.state.cart];
    const productsTemp = [...this.state.storeProducts];
    let itemTemp = cartTemp.find(item => item.id === id);

    if (!itemTemp) {
      //if itemTemp undefine: does not exist in cart array
      //if itemTemp does not exist, first find it in storeProducts
      itemTemp = productsTemp.find(item => item.id === id);

      //before add itemTemp to cart, add more properties: count(amount) and total(price) of one item (itemTemp)
      let total = itemTemp.price;
      let count = 1;
      let cartItem = { ...itemTemp, count, total };

      //add to cart
      cartTemp = [...cartTemp, cartItem];
    } else {
      //itemTemp existed in cart array (that mean exist properties: count and total)
      itemTemp.count++;
      itemTemp.total = itemTemp.price * itemTemp.count;
      itemTemp.total = parseFloat(itemTemp.total.toFixed(2));
      //cartTemp = [...cartTemp, itemTemp];
    }

    //update cart to state
    this.setState(
      () => {
        return { cart: cartTemp };
      },
      () => {
        this.addTotals();
        this.syncStorage();
        this.openCart();
      }
    );
  };

  //set single product
  setSingleProduct = id => {
    let product = this.state.storeProducts.find(item => item.id === id);

    localStorage.setItem("singleProduct", JSON.stringify(product));

    this.setState({
      singleProduct: { ...product },
      loading: false
    });
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
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider, ProductContext };
