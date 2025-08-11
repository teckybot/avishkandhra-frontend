import { useRef } from 'react';
import Logos from '../Components/Logos';
import AvishkAndhraBanner from '../Components/Hero';
import About from '../Components/About';

const Home = () => {
  const videoPageRef = useRef(null);

  return (
    <>
    <Logos />
    <AvishkAndhraBanner />
    <About />
    </>
  );
};

export default Home;