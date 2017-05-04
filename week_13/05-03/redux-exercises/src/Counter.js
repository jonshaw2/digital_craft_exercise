import React from 'react';


export default class Counter extends React.Component {
  // toggle(input) {
  //   store.dispatch({
  //     type: input
  //   });
  //
  // }


  render() {
    return (
      <div>
        <button onClick={() => this.props.subtract('subtract') }>-</button>
          {this.props.count}
        <button onClick={() => this.props.add('add') }>+</button>
      </div>
    );
  }
}
