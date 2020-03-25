import { IJokeData } from 'types';

export const SET_JOKE_DATA = 'jokes/SET_JOKE_DATA';
export const SET_LOADING = 'jokes/SET_LOADING';

export interface JokesState {
  jokeData: IJokeData | null;
  isLoading: boolean;
}

interface SetJokeDataAction {
  type: typeof SET_JOKE_DATA;
  payload: IJokeData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export type JokesActionTypes = SetJokeDataAction | SetLoadingAction;
