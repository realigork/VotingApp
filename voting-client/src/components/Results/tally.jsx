import React from 'react';

const Tally = ({ entry, votes }) => (
  <div key="entry" className="entry">
    <h1>{entry}</h1>
    <div className="voteCount">
      {votes(entry)}
    </div>
  </div>
);

export default Tally;