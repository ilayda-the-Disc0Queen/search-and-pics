import React from 'react';

class ImageCard extends React.Component {
  render() {
    const { description, urls } = this.props.image; // the desc and urls come from this.props.image

    return () {
      <div>
        <img
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
