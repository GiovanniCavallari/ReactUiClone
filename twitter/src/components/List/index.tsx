import React from 'react';

import { Container, Item, Title } from './styled';

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = ({ title, elements }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element, index) => (
        <Item key={String(index)}>{element}</Item>
      ))}
    </Container>
  );
};

export default List;
