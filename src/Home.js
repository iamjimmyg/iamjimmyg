import React, { Component } from 'react'

import { connect } from 'react-redux'
import { selectHeader } from './actions/index'
import { bindActionCreators } from 'redux'
//import video from '../public/typing.mov'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Motion, spring} from 'react-motion'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      aboutButton: <div className="intro invisible">
          <Link className="homepage-button" to="about" spy={true} smooth={true} duration={500} onClick={()=>{this.props.selectHeader('about')}} >
            <div>About my work</div>
          </Link>
        </div>,
    }
    this.handleAboutButton = this.handleAboutButton.bind(this)
  }

  handleAboutButton(){
    setTimeout(() => {
      this.setState({ aboutButton: <Motion defaultStyle={{x: -35, o: 0}} style={{x: spring(0), o: spring(1, {stiffness: 30})}}>
        {value => <div className="intro" style={{left: value.x, opacity: value.o}}>
            <Link className="homepage-button" to="about" spy={true} smooth={true} duration={500} onClick={()=>{this.props.selectHeader('about')}} >
              <div>About my work</div>
            </Link>
          </div>}
      </Motion> })
    },650)

  }

  render() {

    return (
      <section className="container flex" id='landing'>

        <div className="landing-content container" >

          <div className="text-center center-content">
            <Motion defaultStyle={{x: -35, o: 0}} style={{x: spring(0), o: spring(1, {stiffness: 30})}}>
              {value => <div className="intro" style={{left: value.x, opacity: value.o}}>
                  <h5 className="font-italic">I'm here to help clients with their business by fixing and creating projects of value</h5>
                  <h1> {'Blah blah blah blahb blah'.toUpperCase()}</h1>
                </div>}
            </Motion>
            {this.handleAboutButton()}
            {this.state.aboutButton}


          </div>
        </div>

      </section>

    );
  }
}

function mapStateToProps(state){
  return {
    headerData: state.headerData
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectHeader: selectHeader }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
