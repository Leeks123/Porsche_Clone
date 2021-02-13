import Link from 'next/link';
import Layout from '../components/Layout';
import Slide from '../components/LandingPage/Slide';
import ModelsCards from '../components/LandingPage/ModelsCards';
import FindSecondhands from '../components/LandingPage/FindSecondhands';
import ShoppingTools from '../components/LandingPage/ShoppingTools';

const IndexPage = () => (
  <Layout title="Porsche Korea Clone">
    <Slide />
    <ModelsCards />
    <FindSecondhands />
    <ShoppingTools />
  </Layout>
);

export default IndexPage;
