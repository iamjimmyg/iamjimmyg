import React, { Component } from 'react'
import {Motion, spring} from 'react-motion'
import IronImage from './IronImage'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      about: <div className="intro invisible">
          <hr/>
          <br/>
          <br/>
          <h5 className="font-italic">I love building everything from small business sites to rich interactive web apps.</h5>
          <h5 className="font-italic">This website and all projects listed below were built with React.js. </h5>
        </div>
    }
    this.handleAbout = this.handleAbout.bind(this)
  }

  handleAbout(){
    setTimeout(() => {
      this.setState({ about: <Motion defaultStyle={{x: -35, o: 0}} style={{x: spring(0), o: spring(1, {stiffness: 30})}}>
        {value => <div className="intro" style={{left: value.x, opacity: value.o, position: 'relative'}}>
            <hr/>
            <br/>
            <br/>
            <h5 className="font-italic">I love building everything from small business sites to rich interactive web apps. </h5>
            <h5 className="font-italic">This website and all projects listed below were built with React.js. </h5>
          </div>}
      </Motion> })
    },650)

  }

  render() {
    
    let backgroundImageStyle = `translateY(${-this.props.transformY}px)`
    //let textHeight = `translateY(${this.props.transformY})`
    let scaleText = `scale(${this.props.scale}, ${this.props.scale})`


    return (
      <section className="container flex" id='landing'>
        <div className='background-div' style={{opacity: this.props.imageOpacity}}>
        </div>

        <IronImage
          height='100%'
          srcPreload='../Optimized-laptop.jpg'
          transformY={this.props.transformY}
          backgroundImageStyle={backgroundImageStyle}
          srcLoaded='../laptop.jpg'
        />

        <div className="landing-content container" style={{ transform: scaleText, opacity: this.props.textOpacity, top: this.props.transformY }}>

          <div className="center-content" >
            <Motion defaultStyle={{x: -35, o: 0}} style={{x: spring(0), o: spring(1, {stiffness: 30})}}>
              {value => <div className="intro" style={{left: value.x, opacity: value.o}}>
                  <h5 className="font-italic">Hello, I'm</h5>
                  <h1>JIMMY GONZALEZ</h1>
                  <h4>FRONT-END DEVELOPER</h4>

                </div>}
            </Motion>

            {this.handleAbout()}
            {this.state.about}

          </div>
        </div>
      </section>

    );
  }
}

export default Home;
