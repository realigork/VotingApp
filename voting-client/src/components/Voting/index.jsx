import React from 'react';

class Voting extends React.Component{
  constructor() {
    super();
    this.renderPair = this.renderPair.bind(this);
  }

  renderPair() {
    return this.props.pair.map(entry => {
      return (
        <button key={entry} onClick={() => this.props.vote(entry)}>
          <h1>{entry}</h1>
        </button>
      );
    });
  }

  render() {
    let renderedPair = null;
    if (this.props.pair.length) {
      renderedPair = this.renderPair();
    }
    return(
      <div className="voting">
        {renderedPair}
      </div>
    );
  }
}

export default Voting;