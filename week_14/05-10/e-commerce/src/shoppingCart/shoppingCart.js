import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './shoppingCart.actions';


class shoppingCart extends React.Component {
  // componentDidMount(){
  //   console.log('user info',this.props.loginUser);
  //   this.props.getCart(this.props.loginUser.currentToken, this.props.loginUser.id)
  // }
  componentWillReceiveProps(newProps){
    console.log('newprops userinfo', newProps.loginUser)
    console.log('user info',this.props.loginUser);
    if (this.props.loginUser.id !== newProps.loginUser.id){
      this.props.getCart(newProps.loginUser.currentToken, newProps.loginUser.id)
    }
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

const ShoppingCartContainer = ReactRedux.connect(
  state => ({
  loginUser: state.loginUser,
  shoppingCart: state.shoppingCart

  }),
  actions
)(shoppingCart);

export default ShoppingCartContainer;
