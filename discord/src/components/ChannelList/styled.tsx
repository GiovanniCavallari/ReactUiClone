import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 24px 16px 0px;
  background-color: var(--secondary);

  max-height: calc(100vh - 98px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`;

export const CategoryIcon = styled(FiPlus)`
  width: 21px;
  height: 21px;
  color: var(--symbol);
  cursor: pointer;
`;
