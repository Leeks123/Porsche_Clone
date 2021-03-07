import { ReactNode } from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Nav from './Nav';
import Footers from './Footers';

const Dimmed = styled.div`
  background-color: #000;
  opacity: 0.7;
  position: absolute;
  top:117px;left:0;right:0;bottom:0;
  z-index: 90;
`;
type Props = {
  children?: ReactNode
  title?: string
}
const Layout = ({ children, title = 'Porsche Korea' }: Props) => {
  // @ts-ignore
  const menuOpend = useSelector((state) => state.layout?.menuOpend);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Nav />
      </header>
      {menuOpend && <Dimmed />}
      {children}
      <footer>
        <Footers />
      </footer>
    </div>
  );
};

export default Layout;
