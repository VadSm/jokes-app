import React from 'react';
import { IJokeData } from 'types/joke-card';
import Icon from 'components/ui/Icon';
import LoadingSkeleton from 'components/ui/LoadingSkeleton';

interface IProps {
  jokeData: IJokeData;
  loading: boolean;
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
  loading,
}) => {
  // const jokes = useSelector(store => store.jokes);
  // console.log(jokes);

  return (
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
};

export default JokeCard;
