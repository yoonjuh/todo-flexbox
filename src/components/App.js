import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <SideBar />
          <Main />
        </div>
      </div>
    );
  }
}
export default App;
