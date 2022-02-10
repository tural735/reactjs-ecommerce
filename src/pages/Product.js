import React from 'react';
import Helmet from '../components/Helmet';
import productData from '../assets/fake-data/products';
import Grid from '../components/Grid';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import ProductCard from '../components/ProductCard';
const Product = props => {
  const product=productData.getProductBySlug(props.math.params.slug);
  const relatedProducts=productData.getProducts(8);
  return (
  <Helmet title={product.title}>
    <Section>
      <SectionBody>
        {
          product.title
        }
      </SectionBody>
      <SectionTitle>
        Kham pha them
      </SectionTitle>
      <SectionBody>
        <Grid col={4} mdCol={2} smCol={1} gap={20}>
          {relatedProducts.map((item,index)=>(
            <ProductCard key={index} img01={item.image01} img02={item.image02} name={item.title} price={+(item.price)} slug={item.slug}/>
          ))}
        </Grid>
      </SectionBody>
    </Section>
  </Helmet>
  );
};

export default Product;
