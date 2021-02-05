import styled from '@emotion/styled';

import Logo from './Logo';
import MenuList from './MenuList';
import { mq } from '../../utils/mediaquery';

const StyledNav = styled.nav`
    border-bottom: 1px solid lightgray;
    height: 65px;
    .container {
        width: 86vw;
        height: 100%;
        margin: 0 auto;
        display: flex;
    }
    ${mq[0]} {
        height: 72px;
    }
    ${mq[2]} {
        height: 117px;
    }
`;

const Nav = () => (
  <StyledNav>
    <div className="container">
      <Logo />
      <MenuList />
    </div>
  </StyledNav>
);

export default Nav;
