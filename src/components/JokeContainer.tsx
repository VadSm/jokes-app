import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Joke from 'components/Joke';

const JokeContainer = () => {
  const [jokeData, setJoke] = useState({});

  useEffect(() => {
    axios.get('https://sv443.net/jokeapi/v2/joke/Dark')
      .then(({ data }) => setJoke(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Joke jokeData={jokeData} />
  );
};

export default JokeContainer;
