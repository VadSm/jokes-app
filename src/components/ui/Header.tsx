import React from 'react';

import Wrapper from 'components/ui/Wrapper';
import Icon from 'components/ui/Icon';

const iconTypes = [
  '/icons/fuck.png',
  '/icons/joker.png',
  '/icons/clown.png',
];

const Header = () => {
  const randomIcon = iconTypes[Math.floor(Math.random() * iconTypes.length)];

  return (
    <header className="custom-header">
      <Wrapper>
        <Icon iconPath={randomIcon} className="header-icon" />
        <span>Get a joke</span>
      </Wrapper>
    </header>
  );
};

export default React.memo(Header);
