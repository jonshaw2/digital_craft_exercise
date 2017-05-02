import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './HeadsTails.reducer';

// Add code to create a store
let store = Redux.createStore(reducer);

class HeadsTails extends React.Component {
  flip(){
    store.dispatch({
      type: 'flip'
    });
  }

  render() {
    let value = this.props.flipResult;
    let coinDisplay;

    if (value) {
      let imageUrl = value > 0.5 ?
        'images/quarter-front.png' :
        'images/quarter-back.png';
      coinDisplay = <img src={imageUrl}/>;
    }
    return (
      <div>
        {coinDisplay}
        <button onClick={() => this.flip()}>
          Flip!
        </button>
      </div>
    );
  }
}

// Wrap this in a display function, and subscribe to store's state
// changes and re-display
function display(){
  console.log('in the display');
ReactDOM.render(<HeadsTails flipResult={store.getState()}/>, document.getElementById('root'));
}

console.log('looping');
display();
store.subscribe(display);
