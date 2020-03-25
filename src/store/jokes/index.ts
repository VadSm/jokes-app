import {
  SET_JOKE_DATA,
  SET_LOADING,
  JokesState,
  JokesActionTypes,
} from './types';

const initialState: JokesState = {
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

export const setJokeData = (payload: any) => ({
  type: SET_JOKE_DATA,
  payload,
});

export const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload,
});
