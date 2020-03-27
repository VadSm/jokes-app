import React from 'react';
import { IJokeData } from 'types/joke-card';

import Icon from 'components/ui/Icon';
import LoadingSkeleton from 'components/ui/LoadingSkeleton';

const iconTypesData = {
  Miscellaneous: '/icons/monkey.png',
  Programming: '/icons/programmer.png',
  Dark: '/icons/devil.png',
};

const renderCardContent = ({
  category,
  type,
  setup,
  delivery,
  joke,
}: IJokeData) => (
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
);

interface IProps {
  jokeData: IJokeData | null;
  isLoading: boolean;
}

const JokeCard: React.FC<IProps> = ({
  jokeData,
  isLoading,
}) => (
  <div className="joke-card">
    {isLoading ? (
      <LoadingSkeleton />
    ) : (
      jokeData && renderCardContent(jokeData)
    )}
  </div>
);

export default JokeCard;
