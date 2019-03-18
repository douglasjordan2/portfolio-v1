import React from 'react'

export default function Content() {
  return (
    <div style = {{ fontSize: '1.2rem', lineHeight: '29px', color: '#151617' }}>
      <h1 style = {{ fontSize: '1.5rem', marginBottom: '10px', fontStyle: 'italic', color: '#151617' }}>Projects:</h1>
      <a style = {{ color: '#151617' }} href="https://zen-wright-0d9b37.netlify.com/user-interface/great-idea-website/" target="_blank">Great Idea - pixel perfect design</a>
      <br />
      <a style = {{ color: '#151617' }} href="https://zen-wright-0d9b37.netlify.com/ui-iii-flexbox/great-idea/index.html" target="_blank">Great Idea - flexbox</a>
      <br />
      <a style = {{ color: '#151617' }} href="https://zen-wright-0d9b37.netlify.com/sprint-challenge--user-interface/index.html" target="_blank">Sprint Challenge - multi-page with mobile styles</a>
      <br />
      <a style = {{ color: '#151617' }} href="https://zen-wright-0d9b37.netlify.com/responsive-web-design-i/index.html" target="_blank">Great Idea - adaptive design</a>
      <br />
      <a style = {{ color: '#151617' }} href="https://zen-wright-0d9b37.netlify.com/responsive-web-design-ii/index.html" target="_blank">Great Idea - responsive design</a>
      <br />
      <a style = {{ color: '#151617' }} href="https://zen-wright-0d9b37.netlify.com/preprocessing-ii/index.html" target="_blank">Fun Bus - preprocessing (LESS)</a>
      <br />
      <a style = {{ color: '#151617' }} href="https://zen-wright-0d9b37.netlify.com/sprint-challenge--advanced-css/index.html" target="_blank">Sprint Challenge - SpaceWalkers (LESS)</a>
      <br />
      {/* 
      
      
      IMPORTANT -- take screenshots of javascript challenges 1 through 4 and do something cool with them (show on hover?). they don't have any rendering, but they should be shown in some way
      
      */}
      <a style = {{ color: '#151617' }} href="https://zen-wright-0d9b37.netlify.com/newsfeed-components/index.html" target="_blank">Newsfeed - javascript components</a>
      <br />
      <a style = {{ color: '#151617' }} href="https://zen-wright-0d9b37.netlify.com/tabs-components/index.html" target="_blank">Tabs - javascript components</a>
      <br />
      <a style = {{ color: '#151617' }} href="https://zen-wright-0d9b37.netlify.com/user-interface-project-week/index.html" target="_blank">Project Week - final project for all previous units</a>
      <br /> <br />
      <span style = {{ fontStyle: 'italic', color: '#151617' }}>And finally, my poorly coded, unfinished, ugly pride and joy:</span>
      <br /> <br />
      <a style = {{ color: '#151617' }} href="https://codepen.io/duckjordan/pen/pQpEPv" target="_blank">Texas Holdem</a>
    </div>
  )
}
