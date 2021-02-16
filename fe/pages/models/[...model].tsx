import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import ModelSpecific from '../../components/ModelSpecific';

const Model = () => {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>
          {`포르쉐 모델 | ${router.query?.model[0]}`}
        </title>
      </Head>
      <main><ModelSpecific /></main>
    </Layout>
  );
};

export default Model;
