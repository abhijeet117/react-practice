import Header from './components/Header'
import Hero from './components/Hero'

import BrandPillars from './components/BrandPillars';
import Stats from './components/Stats';
import SecondaryHero from './components/SecondaryHero';
import Advantages from './components/Advantages';
const App = () => {
  return (
    <div className='p-0 m-0 box-border'>
      <Header />

      <Hero />

      <BrandPillars />

      <Stats />
      
      <SecondaryHero />

      <Advantages/>

    </div>
  );
};

export default App;
