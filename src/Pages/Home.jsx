import { useRef } from 'react';
import Logos from '../Components/Logos';
import AvishkAndhraBanner from '../Components/Hero';
import About from '../Components/About';
import FormPage from "../Components/FormPage";
import WhoCanJoin from '../Components/WhoCanJoin';

const Home = () => {
  const videoPageRef = useRef(null);

  return (
    <>
      <Logos />
      <AvishkAndhraBanner />
      <About />
      <WhoCanJoin />
      <FormPage />

    </>
  );
};

export default Home;