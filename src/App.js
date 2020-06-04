//@flow

import React from 'react';

import Counter from './component/Counter';


class App extends React.Component {
  render() {
    return <div className="App">
      <Counter count={"hi"}/>
    </div>
  }
}

export default App;
