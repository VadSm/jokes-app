import React from 'react';

interface IProps {
  jokeData: any
}

const Joke = ({
  jokeData: {
    type, setup, delivery, joke,
  },
}: IProps) => (
  <div className="joke-card">
    {type === 'twopart' ? (
      <>
        <div>{setup}</div>
        <div>{delivery}</div>
      </>
    ) : joke}
  </div>
);

export default Joke;
