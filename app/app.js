import React from 'react';

class App extends React.Component {
  state = {
    value: 'SCHVALUE'
  };

  render () {
    return <h1>{ this.state.value }</h1>;
  }
}

export default App;
