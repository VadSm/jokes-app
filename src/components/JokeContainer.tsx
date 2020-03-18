import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Wrapper from 'components/Wrapper';
import JokeCard, { IJokeData } from 'components/JokeCard';

const JokeContainer = () => {
  const [jokeData, setJoke] = useState<IJokeData | null>(null);

  useEffect(() => {
    axios.get('https://sv443.net/jokeapi/v2/joke/Dark')
      .then(({ data }) => setJoke(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Wrapper className="joke-wrapper">
      {jokeData && <JokeCard jokeData={jokeData} />}
    </Wrapper>
  );
};

export default JokeContainer;
