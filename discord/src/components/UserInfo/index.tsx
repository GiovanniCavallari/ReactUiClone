import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HashtagIcon,
  SettingsIcon,
} from "./styled";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>giocavallari</strong>
          <span>#0944</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HashtagIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
