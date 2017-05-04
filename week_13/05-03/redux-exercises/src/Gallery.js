import React from 'react';


const IMAGES = [
  'images/comfy.jpg',
  'images/farted.jpg',
  'images/hate.jpg',
  'images/lolcat_airplane.jpg',
  'images/mocked.jpg',
  'images/monorail.jpg',
];


export default class Gallery extends React.Component {

  render() {
    // let currentImage = this.props.images[this.props.imageIndex];
    let currentImage =
    IMAGES[this.props.galleryIndex];
    console.log('render');
    return (
      <div>
      {this.props.galleryIndex}
        <button onClick={this.props.previous}>
          Previous
        </button>
        <button onClick={this.props.next}>
          Next
        </button>
        <br/>
          <img src={currentImage} alt='' key={currentImage}/>
        <div>
          {IMAGES.map((imageUrl, idx) =>
            <button key={idx} onClick={() => this.props.loadImage(idx)}><img src={imageUrl} alt='' width="60" height="60"/></button>
          )}
        </div>
      </div>
    );
  }
}
