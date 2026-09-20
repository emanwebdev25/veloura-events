import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <Helmet>
        <title>Veloura Events | Luxury Wedding & Event Planning</title>
        <meta
          name="description"
          content="Veloura Events creates thoughtfully designed luxury weddings and private celebrations in Lahore, Pakistan."
        />
      </Helmet>
      <Navbar />
      <Hero />
    </>
  );
}

export default Home;