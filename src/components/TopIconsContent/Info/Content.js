import React, { Component } from 'react';

export default class Content extends Component {
  render() { console.log(this.props)
    return (
      <p style = {{ fontSize: '1.2rem', color: '#151617' }}>I'm Douglas.<br />I'm a student studying web development.<br />I find it difficult to talk about myself, but I'll give it a shot.
      <br /> <br />
      I started my coding journey in August of 2018. At present, it's been about 3/4 of a year of intense study and practice, and I can't help but feel proud of what I've accomplished so far. I made an ugly, yet functional Texas Holdem game less than 2 months into learning Javascript. I got accepted into an amazing school 3 months into the journey, at which I've received the highest grade possible on all of my projects. Beyond my personal achievements, above all, I enjoy pair programming and helping my classmates. I consider helping others succeed the most important factor in my own success.
      <br /> <br />
      My skillset includes HTML, CSS, and LESS. However, my one hobby and great love in programming has been Javascript. I like solving problems and reducing tedious activities with JS. I like completing coding challenges I find online in as few lines possible. I once recreated the iOS calculator on an iPhone using only a script tag wrapped in an html element, and no stylesheet. Everything was structured and styled using Vanilla Javascript.
      <br /> <br />
      This portfolio site has been created using React.js, which has become my favorite method of building websites.
      <br /> <br />
      I appreciate you taking the time to visit this page. I welcome any feedback or ideas for improvement.</p>
    )
  }
}
