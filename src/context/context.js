import React, { Component } from "react";

import { linkData } from "./linkData";
import { socialData } from "./socialData";
//import { items } from "./productData";
import client from "./contentful";

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
    loading: true,
    search: "",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    company: "all",
    shipping: false
  };

  componentDidMount() {
    //this.setProducts(items);
    client
      .getEntries({
        content_type: "techStoreProducts"
      })
      .then(response => this.setProducts(response.items))
      .catch(console.error);
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

    //get max price
    const maxPrice = Math.max(...storeProducts.map(item => item.price));

    this.setState(
      {
        storeProducts,
        filteredProducts: storeProducts,
        featuredProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false,
        price: maxPrice,
        maxPrice
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

  //cart funcionality

  //increment amount item
  increment = id => {
    //console.log("increment", id);
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);
    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));

    //use function will return a new state
    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  //decrement amount item
  decrement = id => {
    //console.log("decrement", id);
    let tempCart = [...this.state.cart];
    let cartItem = tempCart.find(item => item.id === id);
    if (cartItem.count > 1) {
      cartItem.count--;
      cartItem.total = cartItem.price * cartItem.count;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));
    } else {
      this.removeItem(id);
      return;
    }

    this.setState(
      {
        cart: [...tempCart]
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  //remove a item
  removeItem = id => {
    //console.log("remove item", id);
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);

    this.setState(
      {
        cart: [...tempCart]
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  //revove all items (clear)
  clearCart = () => {
    //console.log("clear all items");
    this.setState(
      {
        cart: []
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  //handle filtering
  handleChange = event => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    //console.log(`Name: ${name}, Value: ${value}, Type: ${event.target.type}`);
    this.setState(
      {
        [name]: value
      },
      this.sortData
    );
  };

  //sort
  sortData = () => {
    const { storeProducts, price, company, shipping, search } = this.state;
    let tempPrice = parseInt(price);
    let tempProducts = [...storeProducts];

    //search text filter
    if (search.length > 0) {
      tempProducts = tempProducts.filter(item => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.title.toLowerCase().slice(0, search.length);
        if (tempSearch === tempTitle) {
          return item;
        } else {
          return null;
        }
      });
    }

    //company filter
    if (company !== "all") {
      tempProducts = tempProducts.filter(item => item.company === company);
    }

    //price filter
    tempProducts = tempProducts.filter(item => item.price <= tempPrice);

    //free shipping filter
    if (shipping) {
      tempProducts = tempProducts.filter(item => item.freeShipping === true);
    }

    this.setState({
      filteredProducts: tempProducts
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
          setSingleProduct: this.setSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleChange: this.handleChange,
          sortData: this.sortData
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider, ProductContext };
