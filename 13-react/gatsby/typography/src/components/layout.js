import React from "react"

export default ({children}) => (
  <div style={ {color: 'green', margin: '3em auto', maxWidth: 650, padding: '0 1em', textAlign: 'justify'} }>
    <h3>My Site</h3>
    {children}
  </div>
);