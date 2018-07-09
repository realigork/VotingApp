import React from 'react';

class Vote extends React.Component{
  constructor() {
    super();
    this.renderPair = this.renderPair.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
    this.hasVotedFor = this.hasVotedFor.bind(this);
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  renderPair() {
    return this.props.pair.map(entry => {
      return (
        <button
          key={entry}
          onClick={() => this.props.vote(entry)}
          disabled={this.isDisabled()}
        >
          <h1>{entry}</h1>
          {
            this.hasVotedFor(entry) ?
              <div className="label">Voted</div> :
              null
          }
        </button>
      );
    });
  }

  render() {
    let renderedPair = null;
    // Doing a check for standard array because .length
    // is not working with Immutable List 09/07/2018
    const pairLength = (Array.isArray(this.props.pair)) ?
      this.props.pair.length :
      this.props.pair.size;

    if (pairLength) {
      renderedPair = this.renderPair();
    }
    return(
      <div className="voting">
        {renderedPair}
      </div>
    );
  }
}

export default Vote;