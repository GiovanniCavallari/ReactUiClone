import React from 'react';

import { Container } from './styled';

interface Props {
  title: string;
  subtitle: string;
}

const News: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <Container>
      <span>{title}</span>
      <strong>{subtitle}</strong>
    </Container>
  );
}

export default News;
