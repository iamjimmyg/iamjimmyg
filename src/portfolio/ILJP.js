import React, { Component } from 'react'

class ILJP extends Component {

  render (){
    return (
        <div data-toggle="modal" data-target=".iljp-modal">
          <div id="carouselILJP" className="carousel slide" data-ride="carousel" data-interval="false">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className='image' src="iljp1.jpg" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className='image' src="iljp2.jpg" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className='image' src="iljp3.jpg" alt="Second slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselILJP" role="button" data-slide="prev">
              <i className="material-icons arrow-left">keyboard_arrow_left</i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselILJP" role="button" data-slide="next">
              <i className="material-icons arrow-right">keyboard_arrow_right</i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

    )
  }
}

export default ILJP
