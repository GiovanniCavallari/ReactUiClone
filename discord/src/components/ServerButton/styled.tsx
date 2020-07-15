import styled from 'styled-components';

import { Props } from './index';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  margin-bottom: 8px;
  background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  transition: border-radius 0.2s, background-color 0.2s;

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    width: 9px;
    height: 9px;
    left: -17px;
    top: calc(50% - 4.5);
    position: absolute;

    border-radius: 50%;
    background-color: var(--white);

    content: '';
    display: ${props => props.hasNotifications ? 'inline' : 'none'};
  }

  &::after {
    width: auto;
    height: 16px;
    bottom: -4px;
    right: -4px;
    position: absolute;

    padding: 2px 4px 0px;
    background-color: var(--notification);
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
    content: '${props => props.mentions && props.mentions}';
    display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none' };
  }

  &.active, &:hover {
    border-radius: 16px;
    background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
  }
`;
