import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getJokeData, getLoadingStatus } from 'store/selectors/jokes';
import getJokeRequest from 'store/thunks/jokes';

import Header from 'components/ui/Header';
import Button from 'components/ui/Button';
import Wrapper from 'components/ui/Wrapper';
import JokeCard from 'components/JokeCard';

const JokeContainer = () => {
  const dispatch = useDispatch();
  const jokeData = useSelector(getJokeData);
  const isLoading = useSelector(getLoadingStatus);

  useEffect(() => {
    dispatch(getJokeRequest());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Wrapper className="joke-wrapper">
        <JokeCard jokeData={jokeData} isLoading={isLoading} />
        {/* <Button onClick={getJoke}>One more</Button> */}
      </Wrapper>
    </>
  );
};

export default JokeContainer;
