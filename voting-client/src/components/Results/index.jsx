import React from 'react';
import Tally from './tally';
import Winner from '../Winner';

export default class Results extends React.PureComponent {
  constructor() {
    super();
    this.getVotes = this.getVotes.bind(this);
  }

  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }

  render() {
    return this.props.winner ?
      <Winner ref="winner" winner={this.props.winner} /> :
      <div className="results">
        <div className="tally">
          {this.props.pair.map(entry =>
            <Tally key={entry} entry={entry} votes={() => this.getVotes(entry)} />
          )}
        </div>
        <div className="management">
          <button ref="next" className="next" onClick={this.props.next}>
            Next
          </button>
        </div>
      </div>;
  }
}