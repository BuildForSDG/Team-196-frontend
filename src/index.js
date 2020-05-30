/* eslint-disable class-methods-use-this */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

class Index extends React.Component {
  render() {
    return <App />;
  }
}

const Application = document.getElementById('app');

ReactDOM.render(<Index />, Application);
