import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
  "a",
  {href: "#", target: "_blank"},
  "Click this link"
);

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement
)
