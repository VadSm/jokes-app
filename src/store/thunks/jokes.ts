import { setJokeData, setLoading, JokesActionTypes } from 'store/actions/jokes';
import axios from 'axios';
import { Dispatch as IDispatch } from 'redux';

const getJokeRequest = () => (
  (dispatch: IDispatch<JokesActionTypes>) => {
    dispatch(setLoading(true));

    axios.get('https://sv443.net/jokeapi/v2/joke/Any')
      .then(({ data }) => dispatch(setJokeData(data)))
      .catch(err => console.error(err))
      .finally(() => dispatch(setLoading(false)));
  }
);

export default getJokeRequest;
