import React, { Component } from 'react';
import skydiving from '../Images/skydiving.jpg';
import dobieCamp from '../Images/dobieCamp.jpg';

class Card extends Component {

  render() {
    const imageArray = [
      { img: skydiving, text: 'Bravely Skydiving' },
      { img: dobieCamp, text: 'Dobie Wan Kenobi at Camp' },
    ];

    return (
      <div>
        <div>
          {imageArray.map(photoObject => (
            <div>
              <img src={photoObject.img} alt={photoObject.text} />
              
                <div className="text">
                  {photoObject.text}
                </div>
              
            </div>
          ))}
        </div>
      </div>

    )
  }
}

export default Card;