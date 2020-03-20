import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from 'components/ui/Header';
import Button from 'components/ui/Button';
import Wrapper from 'components/ui/Wrapper';
import JokeCard, { IJokeData } from 'components/JokeCard';

const JokeContainer = () => {
  const [jokeData, setJoke] = useState<IJokeData | null>(null);
  const [isLoading, setLoading] = useState(false);

  const getJoke = () => {
    setLoading(true);

    axios.get('https://sv443.net/jokeapi/v2/joke/Any')
      .then(({ data }) => setJoke(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <>
      <Header />
      <Wrapper className="joke-wrapper">
        {jokeData && <JokeCard jokeData={jokeData} loading={isLoading} />}
        <Button onClick={getJoke}>One more</Button>
      </Wrapper>
    </>
  );
};

export default JokeContainer;
