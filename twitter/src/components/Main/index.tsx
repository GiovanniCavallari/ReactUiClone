import React from 'react';

import ProfilePage from '../ProfilePage';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styled';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button><BackIcon/></button>
        <ProfileInfo>
          <strong>Giovanni Cavallari</strong>
          <span>712 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
}

export default Main;
