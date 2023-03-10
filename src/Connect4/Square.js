import React from 'react';
import './Game.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({ value: 'O' })}
      >
        {this.state.value}
      </button>
    );
  }
}

export default Square;