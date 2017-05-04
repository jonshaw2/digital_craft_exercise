import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Gallery.reducer';

const IMAGES = [
  'images/comfy.jpg',
  'images/farted.jpg',
  'images/hate.jpg',
  'images/lolcat_airplane.jpg',
  'images/mocked.jpg',
  'images/monorail.jpg',
];

let store = Redux.createStore(reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Gallery extends React.Component {
  loadImage(index){
    store.dispatch({
      type: 'loadImage',
      index: index
    })
  }

  previous(){
    store.dispatch({
      type: 'previous'
    });
  }

  next(){
    store.dispatch({
      type: 'next'
    });
  }
  render() {
    let currentImage = this.props.images[this.props.imageIndex];
    return (
      <div>
        <button onClick={() => this.previous()}>
          Previous
        </button>
        <button onClick={() => this.next()}>
          Next
        </button>
        <br/>
          <img src={currentImage} key={currentImage}/>
        <div>
          {this.props.images.map((imageUrl, idx) =>
            <button onClick = {() => this.loadImage(idx)}><img key={idx} src={imageUrl} width="60" height="60"/></button>
          )}
        </div>
      </div>
    );
  }
}

function display() {
  ReactDOM.render(
    <Gallery imageIndex = {store.getState()} images={IMAGES}/>,
    document.getElementById('root')
  );
}
display();
store.subscribe(display);
