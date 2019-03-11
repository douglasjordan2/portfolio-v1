import React, { Component } from 'react';
import uuid from 'uuid';
import Icon from './Icon';

export default 
class IconContainer extends Component {
  state = {
    icons: [
      {
        img: <i class="fas fa-info-circle"></i>,
        content: 
        <p style = {{ fontSize: '1.2rem' }}>I'm Douglas.<br />I'm a student studying web development.<br />I find it difficult to talk about myself, but I'll give it a shot.
        <br /> <br />
        I started my coding journey in August of 2018. At present, it's been about 3/4 of a year of intense study and practice, and I can't help but feel proud of what I've accomplished so far. I made an ugly, yet functional Texas Holdem game less than 2 months into learning Javascript. I got accepted into an amazing school 3 months into the journey, at which I've received the highest grade possible on all of my projects. Beyond my personal achievements, above all, I enjoy pair programming and helping my classmates. I consider helping others succeed the most important factor in my own success.
        <br /> <br />
        My skillset includes HTML, CSS, and LESS. However, my one hobby and great love in programming has been Javascript. I like solving problems and reducing tedious activities with JS. I like completing coding challenges I find online in as few lines possible. I once recreated the iOS calculator on an iPhone using only a script tag wrapped in an html element, and no stylesheet. Everything was structured and styled using Vanilla Javascript.
        <br /> <br />
        This portfolio site has been created using React.js, which has become my favorite method of building websites.
        <br /> <br />
        I appreciate you taking the time to visit this page. I welcome any feedback or ideas for improvement.</p>,
        id: uuid.v4(),
        visible: false
      },
      {
        img: <i class="fas fa-project-diagram"></i>,
        content: 
        <div style = {{ fontSize: '1.5rem', lineHeight: '35px' }}>
          <h1 style = {{ fontSize: '2rem', marginBottom: '10px' }}>Projects:</h1>
          <a href="https://zen-wright-0d9b37.netlify.com/user-interface/great-idea-website/" target="_blank">Great Idea - pixel perfect design</a>
          <br />
          <a href="https://zen-wright-0d9b37.netlify.com/ui-iii-flexbox/great-idea/index.html" target="_blank">Great Idea - flexbox</a>
          <br />
          <a href="https://zen-wright-0d9b37.netlify.com/sprint-challenge--user-interface/index.html" target="_blank">Sprint Challenge - multi-page with mobile styles</a>
          <br />
          <a href="https://zen-wright-0d9b37.netlify.com/responsive-web-design-i/index.html" target="_blank">Great Idea - adaptive design</a>
          <br />
          <a href="https://zen-wright-0d9b37.netlify.com/responsive-web-design-ii/index.html" target="_blank">Great Idea - responsive design</a>
          <br />
          <a href="https://zen-wright-0d9b37.netlify.com/preprocessing-ii/index.html" target="_blank">Fun Bus - preprocessing (LESS)</a>
          <br />
          <a href="https://zen-wright-0d9b37.netlify.com/sprint-challenge--advanced-css/index.html" target="_blank">Sprint Challenge - SpaceWalkers (LESS)</a>
          <br />
          {/* 
          
          
          IMPORTANT -- take screenshots of javascript challenges 1 through 4 and do something cool with them (show on hover?). they don't have any rendering, but they should be shown in some way
          
          */}
          <a href="https://zen-wright-0d9b37.netlify.com/newsfeed-components/index.html" target="_blank">Newsfeed - javascript components</a>
          <br />
          <a href="https://zen-wright-0d9b37.netlify.com/tabs-components/index.html" target="_blank">Tabs - javascript components</a>
          <br />
          <a href="https://zen-wright-0d9b37.netlify.com/user-interface-project-week/index.html" target="_blank">Project Week - final project for all previous units</a>
          <br /> <br />
          <span>And finally, my poorly coded, unfinished, ugly pride and joy:</span>
          <br /> <br />
          <a href="https://codepen.io/duckjordan/pen/pQpEPv" target="_blank">Texas Holdem</a>
        </div>,
        id: uuid.v4(),
        visible: false
      },
      {
        img: <i class="far fa-envelope"></i>,
        content: 
          <div style = {{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }}>
            <h1 style = {{
              fontSize: '1.5rem',
              textAlign: 'center',
              marginBottom: '15px'
            }}>Contact Me:</h1>
            <span style = {{fontSize: '1rem', textAlign: 'center', marginBottom: '10px' }}>Email: douglasjordan2@gmail.com</span>
            <span style = {{fontSize: '1rem', textAlign: 'center' }}>Phone: (563) 200-4772</span>
          </div>,
        id: uuid.v4(),
        visible: false
      },
    ],
    margin: false
  }

  containerStyles = () => {
    return({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '400px',
      position: 'absolute',
      top: '5%',
      right: 'calc(50vw - 200px)'
    });
  }

  openContent = id => {
    this.setState({ icons: this.state.icons.map(icon => {
      if(icon.id == id) {
        icon.visible = !icon.visible
      } else {
        icon.visible = false;
      }
      return icon;
    }) })

    return this.addDocClick()
  }

  removeAll = () => {
    this.setState({ icons: this.state.icons.map(icon => {
      icon.visible = false;
      return icon;
    }) })

    return this.removeDocClick()
  }

  addDocClick = () => {
    return document.addEventListener('click', this.removeAll)
  }

  removeDocClick = () => {
    return document.removeEventListener('click', this.removeAll)
  }

  render() {
    return (
      <div style = { this.containerStyles() }>
        {this.state.icons.map(icon => (
          <Icon 
            icon = { icon }
            openContent = { this.openContent }
            addDocClick = { this.addDocClick }
            removeDocClick = { this.removeDocClick }
          />
        ))}
      </div>
    )
  }
}