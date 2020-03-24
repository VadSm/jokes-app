import React from 'react';

import Icon from 'components/ui/Icon';
import LoadingSkeleton from 'components/ui/LoadingSkeleton';

const iconTypesData = {
  Miscellaneous: '/icons/monkey.png',
  Programming: '/icons/programmer.png',
  Dark: '/icons/devil.png',
};

export interface IJokeData {
  type: string;
  category: keyof typeof iconTypesData;
  setup?: string;
  delivery?: string;
  joke?: string;
}

interface IProps {
  jokeData: IJokeData;
  loading: boolean;
}

const JokeCard: React.FC<IProps> = ({
  jokeData: {
    category, type, setup, delivery, joke,
  },
  loading,
}) => (
  <div className="joke-card">
    {loading ? (
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
