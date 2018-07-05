import { List, Map } from 'immutable';
import { expect } from 'chai';

import { setEntries, next, vote } from '../src/core';

const MOVIES = {
  'Trainspotting': 'Trainspotting',
  '28 Days Later': '28 Days Later',
  'Sunshine': 'Sunshine'
};

describe('application logic', () => {
  describe('setEntries', () => {
    it('adds the entries to the state', () => {
      const state = Map();
      const entries = [MOVIES['Trainspotting'], MOVIES['28 Days Later']];
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of(MOVIES['Trainspotting'], MOVIES['28 Days Later'])
      }));
    });
  });

  describe('next', () => {
    it('takes the next two entries under vote', () => {
      const state = Map({
        entries: List.of(
          MOVIES['Trainspotting'],
          MOVIES['28 Days Later'],
          MOVIES['Sunshine']
        )
      });
      const nextState = next(state);

      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of(MOVIES['Trainspotting'], MOVIES['28 Days Later'])
        }),
        entries: List.of(MOVIES['Sunshine'])
      }));
    });
  });

  describe('vote', () => {
    it('creates a tally for the voted entry', () => {
      const state = Map({
        vote: Map({
          pair: List.of(MOVIES['Trainspotting'], MOVIES['28 Days Later'])
        }),
        entries: List()
      });
      const nextState = vote(state, MOVIES['Trainspotting']);

      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of(MOVIES['Trainspotting'], MOVIES['28 Days Later']),
          tally: Map({
            'Trainspotting': 1
          })
        }),
        entries: List()
      }))
    });

    it('adds to existing tally for the voted entry', () => {
      const state = Map({
        vote: Map({
          pair: List.of(MOVIES['Trainspotting'], MOVIES['28 Days Later']),
          tally: Map({
            'Trainspotting': 3,
            '28 Days Later': 2
          })
        }),
        entries: List()
      });
      const nextState = vote(state, MOVIES['Trainspotting']);

      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of(MOVIES['Trainspotting'], MOVIES['28 Days Later']),
          tally: Map({
            'Trainspotting': 4,
            '28 Days Later': 2
          })
        }),
        entries: List()
      }));
    });
  });
});