import { List, Map } from 'immutable';
import { expect } from 'chai';

import { setEntries } from '../src/core';

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
});