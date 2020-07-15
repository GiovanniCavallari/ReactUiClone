import React from "react";

import { Container, Role, User, Avatar } from "./styled";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Giovanni Cavallari" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Diego Fernandes" isBot />

      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
    </Container>
  );
};

export default UserList;
