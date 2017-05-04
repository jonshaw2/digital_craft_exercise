import React from 'react';


// Add code to create a store


export default class HeadsTails extends React.Component {
  // flip(){
  //   let flipResult = Math.random();
  //   if (flipResult > 0.5){
  //     store.dispatch({
  //       type: 'flipHead'
  //     });
  //   }
  //   else{
  //     store.dispatch({
  //       type: 'flipTail'
  //     })
  //   }
  // }

  render() {
    console.log(this.props);
    let coinDisplay;
    console.log('in the flip HeadsTails');
    console.log(this.props.imageUrl);

      let imageUrl = this.props.imageUrl;

      coinDisplay = <img src={imageUrl} alt=''/>;

    return (
      <div>
        {coinDisplay}
        <button onClick={this.props.flip}>
          Flip!
        </button>
      </div>
    );
  }
}

// Wrap this in a display function, and subscribe to store's state
// changes and re-display
