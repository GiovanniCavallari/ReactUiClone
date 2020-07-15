import styled from "styled-components";
import { FiHash } from "react-icons/fi";
import { MdPersonAdd, MdSettings } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: 5px 3px;

  border-radius: 5px;
  background-color: transparent;
  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div h3 {
    color: var(--senary);
    padding-left: 5px;
    font-weight: normal;
    font-size: 15px;
    transition: color 0.2s;
  }

  > div:not(:first-child) svg {
    display: none;
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div h3 {
      color: var(--white);
    }

    > div:not(:first-child) svg {
      display: block;
    }
  }
`;

export const HashtagIcon = styled(FiHash)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;

export const InviteIcon = styled(MdPersonAdd)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(MdSettings)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;
  margin-left: 4px;
  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;
