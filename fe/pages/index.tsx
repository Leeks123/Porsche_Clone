import Layout from '../components/Layout';
import Slide from '../components/LandingPage/Slide';
import ModelsCards from '../components/LandingPage/ModelsCards';
import FindSecondhands from '../components/LandingPage/FindSecondhands';
import ShoppingTools from '../components/LandingPage/ShoppingTools';
import Discover from '../components/LandingPage/Discover';

const IndexPage = () => (
  <Layout title="Porsche Korea Clone">
    <Slide />
    <ModelsCards />
    <FindSecondhands />
    <ShoppingTools />
    <Discover />
  </Layout>
);

export default IndexPage;
