import React from 'react';

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  TweetButton,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styled';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton className="active">
          <HomeIcon />
          <span>Página inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <TweetButton>
          <span>Tweetar</span>
        </TweetButton>
      </TopSide>

      <BotSide>
        <Avatar />
        <ProfileData>
          <strong>Giovanni Cavallari</strong>
          <span>@giocavallari</span>
        </ProfileData>

        <ExitIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
