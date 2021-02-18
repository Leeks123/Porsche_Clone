import { AppProps } from 'next/app';
import Head from 'next/head';
import 'antd/dist/antd.css';
import wrapper from '../redux/store/configureStore';
import '../components/ModelSpecific/ModelBoard/modal.css';

const App = ({ Component }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Porsche Clone</title>
    </Head>
    <Component />
  </>
);

export default wrapper.withRedux(App);
