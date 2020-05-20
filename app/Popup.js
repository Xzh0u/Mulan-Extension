import React, { Component } from 'react';
import { render } from 'react-dom';
import './base.less';

class PopupApp extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  buttonOnClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div id="mulan" className="bg-white rounded-lg p-6">
        <div
          className="ml-h-16 ml-w-16 ml-rounded-full ml-mx-auto ml-bg-teal-500"
          src="./avatar.jpg"
          alt="avatar"
        />
        <div className="ml-text-center">
          <h2 className="ml-text-lg">Erin Lindford</h2>
          <div className="ml-text-purple-500">Customer Support</div>
          <div className="ml-text-gray-600">erinlindford@example.com</div>
          <div className="ml-text-gray-600">(555) 765-4321</div>
        </div>
      </div>
    );
  }
}

render(<PopupApp />, document.querySelector('#root'));
