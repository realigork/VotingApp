import React from 'react';

class Voting extends React.Component{
  constructor() {
    super();
    this.renderPair = this.renderPair.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
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
          disabled={this.isDisabled}
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
    if (this.props.pair.length) {
      renderedPair = this.renderPair();
    }
    return(
      <div className="voting">
        {
          this.props.winner ?
            <div ref="winner">Winner is {this.props.winner}</div> :
            {renderedPair}
        }
      </div>
    );
  }
}

export default Voting;