import React from 'react';
import { IJokeData } from 'types/joke-card';

import Icon from 'components/ui/Icon';
import LoadingSkeleton from 'components/ui/LoadingSkeleton';

interface IProps {
  jokeData: IJokeData;
  isLoading: boolean;
}

const iconTypesData = {
  Miscellaneous: '/icons/monkey.png',
  Programming: '/icons/programmer.png',
  Dark: '/icons/devil.png',
};

const JokeCard: React.FC<IProps> = ({
  jokeData: {
    category, type, setup, delivery, joke,
  },
  isLoading,
}) => (
  <div className="joke-card">
    {isLoading ? (
      <LoadingSkeleton />
    ) : (
      <>
        <Icon
          className="joke-type-icon"
          iconPath={iconTypesData[category]}
          title={category}
        />
        {type === 'twopart' ? (
          <>
            <p>{setup}</p>
            <p>{delivery}</p>
          </>
        ) : <p>{joke}</p>}
      </>
    )}
  </div>
);

export default JokeCard;
