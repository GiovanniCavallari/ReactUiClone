import React, { useRef, useEffect } from "react";
import AlternateEmail from "../../assets/alternate_email.svg";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styled";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(20).keys()).map((item) => (
          <ChannelMessage
            author="Giovanni Cavallari"
            date="06/07/2020"
            content="Lorem Ipsum sit dolor amet."
          />
        ))}

        <ChannelMessage
          author="Diego Fernandes"
          date="06/07/2020"
          content={
            <>
              <Mention>@Giovanni Cavallari</Mention> Lorem Ipsum sit dolor amet?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input placeholder="Começar a conversar em #chat-livre" />
        <InputIcon>
          <img src={AlternateEmail} alt="Message input icon" />
        </InputIcon>
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
