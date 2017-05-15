import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Product.action';

class Gallery extends React.Component{
componentDidMount() {

  this.props.getProduct(this.props.params.id);
}

  render(){
    let productName = '';
    let productDesc = '';
    let productURL = '';
    let productPrice = '';
    let product

    if(this.props.product){
      product = this.props.product;
      console.log('it exists:', this.props.product);
      productName = product.name;
      productDesc = product.description;
      productURL = product.url;
      productPrice = product.price;

    }

    return(
      <div>
      <h1>
      In product page
      </h1>
      <h3>
      {productName}
      </h3>
      <img src={productURL} alt={productURL} width="300" height="300"/><br/>
      Price: {productPrice}<br/>
      Description: {productDesc}<br/>

      </div>
    );
  }
}

const ProductContainer = ReactRedux.connect(
  state=>({
    product: state.product.productInfo
  }),
  actions
)(Gallery);

export default ProductContainer;
