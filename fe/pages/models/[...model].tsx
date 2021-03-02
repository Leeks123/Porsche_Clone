import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import ModelSpecific from '../../components/ModelSpecific';

const Model = () => {
  const router = useRouter();
  const model = router.query?.model[0];
  return (
    <Layout>
      <Head>
        <title>
          {`포르쉐 모델 | ${model}`}
        </title>
      </Head>
      <main><ModelSpecific model={model} /></main>
    </Layout>
  );
};

export default Model;
