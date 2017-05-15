import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Gallery.action';
import {Link} from 'react-router';

class Gallery extends React.Component{
componentDidMount() {
  this.props.getGallery();
}

  render(){
    console.log('products:', this.props.products);
    console.log('index:',this.props.index);
    console.log('category:', this.props.category);
    let category = ''

    let toaster = ''
    if (this.props.category.length !== 0){
      console.log('truthy?');
      category = this.props.category.map((categories, idx) =>

        <div key={idx} className="category" >
          <h2>
            {categories.toUpperCase()}
          </h2>
        <div>
        {this.props.products[categories].map((products, idx2) =>
            <div className="imageAndName" key={idx2}>
            <Link to={"/products/" + products.id}>
            <img className="product_image"
            src={products.url} height="200" width="200"
            alt={products.url}/>
            </Link>
            ${products.price.toFixed(2)}<br/>
            {products.name}
            </div>
          )}
        </div>
      </div>

      )
    }
    return(
      <div>
      <h1>
      Products
      </h1>
      <h3>
      {category}
      </h3>
      {toaster}
      </div>
    );
  }
}

const GalleryContainer = ReactRedux.connect(
  state=>({
    index: state.galleryIndex.index,
    products: state.galleryIndex.products,
    category: state.galleryIndex.category
  }),
  actions
)(Gallery);

export default GalleryContainer;
