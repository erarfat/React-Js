import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp() {
  return(
    <h1>Function in main</h1>
  )
}

const reactElement = {
  type: 'a',
  prop: {
      href: 'https://google.com',
      target: '_blank'
  },
  content: 'Click here to open'
}

// creating element which accepts by render() method

const toRender = (<a href="https://google.com" target='_blank'>Click here to vist google</a>)

// creating element which accepts by render() method using react lib

const usingReactLib = React.createElement(
  'a', // 1st is attribute
  {href: 'https://google.com', target: "_blank"},//  2nd is prop using obj
  "Click here ti vist" // to display is kabad exp bhi desakte hai
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
    //usingReactLib this also wroking
    // toRender this is wroking
    // reactElement work kar raha hai but isme react ka render and mere render mai fark hai parameter changes
    //Myapp() can be use
    // <Myapp /> every thing is done by bundler
)
