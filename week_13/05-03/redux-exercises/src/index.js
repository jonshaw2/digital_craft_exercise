import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import Gallery from './Gallery';
import galleryReducer from './Gallery.reducer';
import Counter from './Counter';
import counterReducer from './Counter.reducer';
import * as ReactRedux from 'react-redux';
import Dragon from './Dragon';
import dragonReducer from './Dragon.reducer';
import HeadsTails from './HeadsTails';
import headstailsReducer from './HeadsTails.reducer';



const INITIAL_STATE ={
  count: 0,
  galleryIndex: 0,
  dragon: {
    dragonHp: 20,
    heroHp: 10,
    message: ''
  },
  imageUrl: 'images/quarter-front.png'
};

function reducer(state= INITIAL_STATE, action){
  return {
    galleryIndex: galleryReducer(state.galleryIndex, action),
    count: counterReducer(state.count, action),
    dragon: dragonReducer(state.dragon, action),
    imageUrl: headstailsReducer(state.imageUrl, action)

  }
}

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const HeadsTailsContainer = ReactRedux.connect(
  state => ({imageUrl: state.imageUrl}),
  dispatch => ({
    flip: ()=> {
      console.log('in flip');
      let flipResult = Math.random();
      if (flipResult > 0.5){
        dispatch({
          type: 'flipHead'
        });
      }
      else{
        dispatch({
          type: 'flipTail'
        });
      }
    }
  })
)(HeadsTails)

const DragonContainer = ReactRedux.connect(
  state => ({dragonHp: state.dragon.dragonHp,
            heroHp: state.dragon.heroHp,
            message: state.dragon.message}),
  dispatch => ({
    play: (input) => {
      if (input === 'fight'){
        let result = Math.floor(Math.random()*2);
        console.log(result);
        if (result === 0){
          input = 'dragonWin'
        }
        else {
          input = 'heroWin'
        }
      }
      dispatch({
        type: input
      })
    }

  })
)(Dragon);

const CounterContainer = ReactRedux.connect(
  state => ({ count: state.count}),
  dispatch => ({
    subtract: () => dispatch({
      type: 'subtract'
    }),
    add: () => dispatch({
      type: 'add'
    })
  })
)(Counter);




const GalleryContainer = ReactRedux.connect(
  state => ({ galleryIndex: state.galleryIndex}),
  dispatch => ({
    previous: () => dispatch({
      type: 'previous'
    }),
    next: () => dispatch({
      type: 'next'
    }),
    loadImage: (index) => dispatch({
        type: 'loadImage',
        index: index
    })
  })
)(Gallery)

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <div>
      <HeadsTailsContainer/>
      <DragonContainer/>
      <CounterContainer/>
      <GalleryContainer/>

    </div>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
