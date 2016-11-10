import React from 'react'
import DevTools from 'mobx-react-devtools';
 

export default class MyApp extends React.Component {

  render() {
    return (
      <div>
        <p>DEV TOOLS</p>
        <DevTools />
      </div>
    );
  }
}
