import Link from 'next/link';
import Layout from '../components/Layout';
import Slide from '../components/LandingPage/Slide';
import ModelsCards from '../components/LandingPage/ModelsCards';
import FindSecondhands from '../components/LandingPage/FindSecondhands';

const IndexPage = () => (
  <Layout title="Porsche Korea Clone">
    <Slide />
    <ModelsCards />
    <FindSecondhands />
  </Layout>
);

export default IndexPage;
