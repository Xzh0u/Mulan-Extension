import React, { Component } from 'react';
import { render } from 'react-dom';
import Dock from 'react-dock';
import CaptionPanel from './containers/CaptionPanel';
import './base.less';

class InjectApp extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  buttonOnClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div id="mulan">
        <button onClick={this.buttonOnClick}>Open Todo</button>
        <Dock
          className="ml-min-w-0"
          position="right"
          dimMode="transparent"
          dockStyle={{ minWidth: '200px' }}
          defaultSize={0.25}
          isVisible={this.state.isVisible}>
          <CaptionPanel />
        </Dock>
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const injectDOM = document.createElement('div');
  injectDOM.className = 'inject-react-example';
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);
  render(<InjectApp />, injectDOM);
});
