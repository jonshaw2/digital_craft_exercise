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
    console.log('userID info:',this.props.loginUser);
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
      <button onClick={()=> this.props.buyItRightMeow(this.props.params.id, this.props.loginUser.currentToken, this.props.loginUser.id)}>BUY NOW</button>
      </div>
    );
  }
}

const ProductContainer = ReactRedux.connect(
  state=>({
    product: state.product.productInfo,
    loginUser: state.loginUser
  }),
  actions
)(Gallery);

export default ProductContainer;
