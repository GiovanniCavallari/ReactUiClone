import styled from "styled-components";
import { MdMic, MdHeadset, MdSettings } from "react-icons/md";

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.5);
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;

  > strong {
    font-size: 13px;
    color: var(--white);
    display: block;
    line-height: 1.5;
  }

  > span {
    font-size: 13px;
    color: var(--gray);
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 8px;
  }
`;

export const MicIcon = styled(MdMic)`
  width: 20px;
  height: 20px;
  color: var(--white);
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const HashtagIcon = styled(MdHeadset)`
  width: 20px;
  height: 20px;
  color: var(--white);
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(MdSettings)`
  width: 20px;
  height: 20px;
  color: var(--white);
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;
