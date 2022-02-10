import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import heroSliderData from '../assets/fake-data/hero-slider';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import PolicyCard from '../components/PolicyCard';
import policy from '../assets/fake-data/policy';
import productCard from '../assets/fake-data/products';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import banner from  "../assets/images/banner.png";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      {/* hero Slider */}
      <HeroSlider data={heroSliderData} control={true} auto={true} timeOut={10000}/>
      {/* hero Slider end */}
      {/* policy */}
        <Section>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {
                policy.map((item,index)=>(
                  <Link to='/policy' key={index}>
                    <PolicyCard name={item.name} description={item.description} icon={item.icon}/>
                  </Link>
                ))
              }
            </Grid>
          </SectionBody>
        </Section>
      {/* policy end */}
      {/* best selling section*/}
        <Section>
            <SectionTitle>
              top sản phẩm bán chạy trong tuần
            </SectionTitle>
            <SectionBody>
              <Grid col={4} mdCol={2} smCol={1} gap={20}>
                {
                  productCard.getProducts(4).map((item,index)=>(
                    <ProductCard key={index} img01={item.image01} img02={item.image02} name={item.title} price={+(item.price)} slug={item.slug}/>
                  ))
                }
              </Grid>
            </SectionBody>
          </Section>
      {/* end best selling section */}
      {/* new arrival Section */}
        <Section>
          <SectionTitle>
            sản phẩm mới
          </SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {
                productCard.getProducts(8).map((item,index)=>(
                  <ProductCard key={index} img01={item.image01} img02={item.image02} name={item.title} price={+(item.price)} slug={item.slug}/>
                ))
              }
            </Grid>
          </SectionBody>
        </Section>
      {/* end new arrival Section */}

      {/* banner */}
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section>
      {/*  end banner */}

      {/* populat product Section */}
      <Section>
          <SectionTitle>
            Popular Product
          </SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {
                productCard.getProducts(12).map((item,index)=>(
                  <ProductCard key={index} img01={item.image01} img02={item.image02} name={item.title} price={+(item.price)} slug={item.slug}/>
                ))
              }
            </Grid>
          </SectionBody>
        </Section>
      {/* end popular product Section */}
    </Helmet>
  );
};

export default Home;
