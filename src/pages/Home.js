import React from 'react';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import heroSliderData from '../assets/fake-data/hero-slider';
import Section, { SectionBody, SectionTitle } from '../components/Section';

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      {/* hero Slider */}
      <HeroSlider data={heroSliderData} control={true} auto={true} timeout={5000}/>
      {/* hero Slider end */}
      {/* policy */}
        <Section>
          <SectionTitle></SectionTitle>
          <SectionBody></SectionBody>
        </Section>
      {/* policy end */}
    </Helmet>
  );
};

export default Home;
