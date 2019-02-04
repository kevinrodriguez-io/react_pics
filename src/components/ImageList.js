import './ImageList.css'
import React from 'react'
import ImageCard from './ImageCard';

const ImageList = ({ images, isSearching }) => {
  if (isSearching) {
    return (
      <div className="ui segment" style={{ height: '50vh' }}>
        <div className="ui active dimmer">
          <div className="ui large text loader">Searching images</div>
        </div>
        <p></p>
      </div>
    );
  }
  const imgElements = images.map(
    (image) => <ImageCard key={image.id} image={image} />
  );
  return (
    <div className="image-list">{imgElements}</div>
  );
}

export default ImageList;
