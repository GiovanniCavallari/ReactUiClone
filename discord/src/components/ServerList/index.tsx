import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styled';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton mentions={72} />
    </Container>
  );
}

export default ServerList;
