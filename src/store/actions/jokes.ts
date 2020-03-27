import { IJokeData } from 'types/joke-card';

export const SET_JOKE_DATA = 'jokes/SET_JOKE_DATA';
export const SET_LOADING = 'jokes/SET_LOADING';

interface SetJokeDataAction {
  type: typeof SET_JOKE_DATA;
  payload: IJokeData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export const setJokeData = (payload: IJokeData): SetJokeDataAction => ({
  type: SET_JOKE_DATA,
  payload,
});

export const setLoading = (payload: boolean): SetLoadingAction => ({
  type: SET_LOADING,
  payload,
});

export type JokesActionTypes = SetJokeDataAction | SetLoadingAction;
