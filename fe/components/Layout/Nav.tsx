import styled from '@emotion/styled';

import Logo from './Logo';
import Menu from './Menu';
import { mq } from '../../utils/mediaquery';

const StyledNav = styled.nav`
    border: 1px solid red;
    height: 65px;
    .container {
        border: 1px solid blue;
        width: 86vw;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
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
      <Menu />
    </div>
  </StyledNav>
);

export default Nav;
