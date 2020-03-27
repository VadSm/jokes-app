import { IJokeData } from 'types/joke-card';
import { SET_JOKE_DATA, SET_LOADING, JokesActionTypes } from 'store/actions/jokes';

interface IJokesState {
  jokeData: IJokeData | null;
  isLoading: boolean;
}

const initialState: IJokesState = {
  jokeData: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }: JokesActionTypes) => {
  switch (type) {
    case SET_JOKE_DATA:
      return {
        ...state,
        jokeData: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
