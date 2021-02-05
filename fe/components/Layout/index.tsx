import { ReactNode } from 'react';
import Head from 'next/head';
import Nav from './Nav';
import Footers from './Footers';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Porsche Korea' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav />
    </header>
    {children}
    <footer>
      <Footers />
    </footer>
  </div>
);

export default Layout;
