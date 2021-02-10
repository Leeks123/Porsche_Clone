import Link from 'next/link';
import Layout from '../components/Layout';
import Slide from '../components/LandingPage/Slide';
import ModelsCards from '../components/LandingPage/ModelsCards';

const IndexPage = () => (
  <Layout title="Porsche Korea Clone">
    <Slide />
    <ModelsCards />
  </Layout>
);

export default IndexPage;
