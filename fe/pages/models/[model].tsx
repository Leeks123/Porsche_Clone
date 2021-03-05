import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import ModelSpecific from '../../components/ModelSpecific';

import pageData from '../../utils/modelspecific/page-data';
import specData from '../../utils/modelspecific/spec-data';

type Props = {
  data?: {
    page: object, spec: object,
  },
  errors?: string
}
const Model = ({ data, errors }:Props) => {
  const router = useRouter();
  const model = router.query?.model;

  console.log('[model]', data);

  if (errors) {
    return (
      <Layout>
        <p>
          <span style={{ color: 'red' }}>Error:</span>
          {errors}
        </p>
      </Layout>
    );
  }
  return (
    <Layout>
      <Head>
        <title>
          {`포르쉐 모델 | ${model}`}
        </title>
      </Head>
      <main>
        {model === '718' || model === '911' ? <ModelSpecific model={model} page={data?.page} spec={data?.spec} /> : (
          <h1 style={{ padding: 50 }}>not developed</h1>
        )}
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const models = Object.keys(pageData);
  const paths = models.map((model) => ({
    params: { model },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const model = params?.model;
    const page = pageData[model];
    const spec = specData[model];
    const data = { page, spec };
    console.log('get_static_props', data);

    return { props: { data } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default Model;
