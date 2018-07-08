import React from 'react';

const Winner = ({ winner = '' }) => (
  <div className="winner">
    Winner is {winner}!
  </div>
);

export default Winner;