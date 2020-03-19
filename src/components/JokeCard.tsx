import React from 'react';

import Icon from 'components/ui/Icon';

export interface IJokeData {
  type: string;
  category: string;
  setup?: string;
  delivery?: string;
  joke?: string;
}

interface IProps {
  jokeData: IJokeData;
}

const iconTypes: Record<string, string> = {
  Miscellaneous: '/icons/monkey.png',
  Programming: '/icons/programmer.png',
  Dark: '/icons/devil.png',
};

const JokeCard = ({
  jokeData: {
    category, type, setup, delivery, joke,
  },
}: IProps) => (
  <div className="joke-card">
    <Icon className="joke-type-icon" iconPath={iconTypes[category]} title={category} />
    {type === 'twopart' ? (
      <>
        <p>{setup}</p>
        <p>{delivery}</p>
      </>
    ) : <p>{joke}</p>}
  </div>
);

export default JokeCard;
