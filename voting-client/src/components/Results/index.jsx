import React from 'react';

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
    return (
      <div className='results'>
        {this.props.pair.map(entry =>
          <div key='entry' className='entry'>
            <h1>{entry}</h1>
            <div className='voteCount'>
              {this.getVotes(entry)}
            </div>
          </div>
        )}
      </div>
    );
  }
}