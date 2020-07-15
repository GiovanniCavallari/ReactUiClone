import React from "react";

import ChannelButton from '../ChannelButton';

import { Container, Category, CategoryIcon } from "./styled";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <CategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" selected />
      <ChannelButton channelName="work" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="valorant" />
      <ChannelButton channelName="cod mobile" />
    </Container>
  );
};

export default ChannelList;
