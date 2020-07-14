import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styled';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Giovanni Cavallari</h1>
        <h2>@giocavallari</h2>

        <p>
          Developer at <a href="https://github.com/GiovanniCavallari" target="blank">Grran Labs</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, BR
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 22 de maio de 1997
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>120</strong>
          </span>
          <span>
            <strong>377</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
