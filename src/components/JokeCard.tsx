import React from 'react';

export interface IJokeData {
  type: string;
  setup?: string;
  delivery?: string;
  joke?: string;
}

interface IProps {
  jokeData: IJokeData;
}

const JokeCard = ({
  jokeData: {
    type, setup, delivery, joke,
  },
}: IProps) => (
  <div className="joke-card">
    {type === 'twopart' ? (
      <>
        <p>{setup}</p>
        <p>{delivery}</p>
      </>
    ) : <p>{joke}</p>}
  </div>
);

export default JokeCard;
