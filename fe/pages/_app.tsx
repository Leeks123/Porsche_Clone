/* eslint-disable import/no-extraneous-dependencies */
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'antd/dist/antd.css';
import wrapper from '../redux/store/configureStore';

const App = ({ Component } : AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Porsche Clone</title>
    </Head>
    <Component />
  </>
);

export default wrapper.withRedux(App);
