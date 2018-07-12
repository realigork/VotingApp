import React from 'react';

const Tally = ({ entry }) => (
  <div key="entry" className="entry">
    <h1>{entry}</h1>
    <div className="voteCount">
      {this.getVotes(entry)}
    </div>
  </div>
);

export default Tally;