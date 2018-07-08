import React from 'react';

class Voting extends React.Component{
  constructor() {
    super();
    this.getPair = this.getPair.bind(this);
  }

  getPair() {
    return this.props.pair || [];
  }

  render() {
    return(
      <div className="voting">
        {this.getPair().map(entry => {
          <button key={entry}>
            <h1>{entry}</h1>
          </button>
        })}
      </div>
    );
  }
}

export default Voting;