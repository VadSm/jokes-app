import { IJokeData } from 'types/joke-card';

export const SET_JOKE_DATA = 'jokes/SET_JOKE_DATA';
export const SET_LOADING = 'jokes/SET_LOADING';

export const setJokeData = (payload: IJokeData) => ({
  type: SET_JOKE_DATA,
  payload,
});

export const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload,
});

interface SetJokeDataAction {
  type: typeof SET_JOKE_DATA;
  payload: IJokeData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export type JokesActionTypes = SetJokeDataAction | SetLoadingAction;