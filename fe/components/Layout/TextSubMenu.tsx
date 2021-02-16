import styled from '@emotion/styled';
import { jsx } from '@emotion/react';

import { textMenuProp } from '../../utils/menu-data';

const StyledSubMenu = styled.div`
  display: flex;
  background-color : #fff;
  justify-content: center;
  padding: 50px;
  position: fixed;
  top: 117px;left:0;right:0;

  ul { 
    width: 19vw;
    padding: 0;
    margin: 0 25px 0 0;
    h1 {
      font-weight: 400;
      border-bottom: 1px solid #4a4a4a;
      text-align: left;
      padding-left: 0.625rem;
    }
    li { 
      padding: 3px 0;
      margin: 10px 0 0 10px;
      list-style: none;
      font-size: 1rem;
      &:hover {
        color : #d5001c;
      }
    }

  }
`;
type subProp = {
    data: textMenuProp[]
}
const TextSubMenu = ({ data }:subProp) => (
  <StyledSubMenu css={{ zIndex: 100 }}>
    {data.map((group) => (
      <ul>
        <h1>{group.title}</h1>
        {group.data.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    ))}
  </StyledSubMenu>
);

export default TextSubMenu;
