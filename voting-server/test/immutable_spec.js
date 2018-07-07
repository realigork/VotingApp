import { expect } from 'chai';
import { List, Map } from 'immutable';

const MOVIES = {
  'Trainspotting': 'Trainspotting',
  '28 Days Later': '28 Days Later',
  'Sunshine': 'Sunshine'
};

// A learning test to validate that numbers are immutable in JS
describe('immutability', () => {
  describe('a number', () => {
    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  });

  describe('A List', () => {
    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', () => {
      let state = List.of(MOVIES['Trainspotting'], MOVIES['28 Days Later']);
      let nextState = addMovie(state, MOVIES['Sunshine']);

      expect(nextState).to.equal(List.of(
        MOVIES['Trainspotting'],
        MOVIES['28 Days Later'],
        MOVIES['Sunshine']
      ));

      expect(state).to.equal(List.of(
        MOVIES['Trainspotting'],
        MOVIES['28 Days Later']
      ));
    });
  });

  describe('A Tree', () => {
    function addMovie(currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
      // return currentState.set(
      //   'movies',
      //   currentState.get('movies').push(movie)
      // );
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of(MOVIES['Trainspotting'], MOVIES['28 Days Later'])
      });
      let nextState = addMovie(state, MOVIES['Sunshine']);

      expect(nextState).to.equal(Map({
        movies: List.of(
          MOVIES['Trainspotting'],
          MOVIES['28 Days Later'],
          MOVIES['Sunshine']
        )
      }));

      expect(state).to.equal(Map({
        movies: List.of(MOVIES['Trainspotting'], MOVIES['28 Days Later'])
      }));
    });
  });
});