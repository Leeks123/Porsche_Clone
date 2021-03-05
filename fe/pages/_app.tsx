import { AppProps } from 'next/app';
import Head from 'next/head';
import 'antd/dist/antd.css';
import wrapper from '../redux/store/configureStore';
import '../components/ModelSpecific/ModelBoard/modal.css';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Porsche Clone</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(App);
