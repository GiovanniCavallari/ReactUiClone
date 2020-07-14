import React from 'react';
import StickBox from 'react-sticky-box';

import List from '../List';
import News from '../News';
import FollowSugestion from '../FollowSugestion';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styled';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion name="Adriano Cavallari" nickname="@The64Cobra" />,
              <FollowSugestion name="Ravena Cavallari" nickname="@ravencavallari" />,
              <FollowSugestion name="Rita Cavallari" nickname="@mamaecavallari" />,
              <FollowSugestion name="Alessandro Cavallari" nickname="@papaicavallari" />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News title="Assuntos do momento no Brasil" subtitle="Bootcamp da Rocketseat" />,
              <News title="Assuntos do momento no Brasil" subtitle="Bootcamp da Rocketseat" />,
              <News title="Assuntos do momento no Brasil" subtitle="Bootcamp da Rocketseat" />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News title="Assuntos do momento no Brasil" subtitle="Bootcamp da Rocketseat" />,
              <News title="Assuntos do momento no Brasil" subtitle="Bootcamp da Rocketseat" />,
              <News title="Assuntos do momento no Brasil" subtitle="Bootcamp da Rocketseat" />,
            ]}
          />

          <List
            title="O que está acontecendo"
            elements={[
              <News title="Assuntos do momento no Brasil" subtitle="Bootcamp da Rocketseat" />,
              <News title="Assuntos do momento no Brasil" subtitle="Bootcamp da Rocketseat" />,
              <News title="Assuntos do momento no Brasil" subtitle="Bootcamp da Rocketseat" />,
            ]}
          />
        </Body>
      </StickBox>
    </Container>
  );
};

export default SideBar;
