import IRootState from 'store/reducers/rootState';

export const getJokeData = ({ jokes }: IRootState) => jokes.jokeData;
export const getLoadingStatus = ({ jokes }: IRootState) => jokes.isLoading;
