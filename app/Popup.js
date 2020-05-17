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
      <div className="bg-white rounded-lg p-6">
        <div
          className="h-16 w-16 rounded-full mx-auto bg-teal-500"
          src="./avatar.jpg"
          alt="avatar"
        />
        <div className="text-center">
          <h2 className="text-lg">Erin Lindford</h2>
          <div className="text-purple-500">Customer Support</div>
          <div className="text-gray-600">erinlindford@example.com</div>
          <div className="text-gray-600">(555) 765-4321</div>
        </div>
      </div>
    );
  }
}

render(<PopupApp />, document.querySelector('#root'));
