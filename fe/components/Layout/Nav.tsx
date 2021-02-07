import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import menuSlice from '../../redux/reducers/menu';

import Logo from './Logo';
import Menu from './Menu';
import Sider from './Sider';
import { mq } from '../../utils/mediaquery';

const StyledNav = styled.nav`
    border-bottom: 1px solid lightgray;
    height: 65px;
    .container {
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

const Nav = () => {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    dispatch(menuSlice.actions.windowWidthChange(window.innerWidth));
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
      dispatch(menuSlice.actions.windowWidthChange(window.innerWidth));
    });
    return () => window.removeEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
      dispatch(menuSlice.actions.windowWidthChange(window.innerWidth));
    });
  }, []);

  return (
    <>
      <StyledNav>
        <div className="container">
          <Logo />
          {windowWidth > 1300 ? <Menu /> : <Sider />}
        </div>
      </StyledNav>
    </>
  );
};

export default Nav;
