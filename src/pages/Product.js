import React from 'react';
import Helmet from '../components/Helmet';
import productData from '../assets/fake-data/products';
import Grid from '../components/Grid';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import ProductCard from '../components/ProductCard';
import ProductView from '../components/ProductView';
const Product = props => {
  const product = productData.getProductBySlug(props.match.params.slug)

    const relatedProducts = productData.getProducts(8)

    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [product]);
  return (
  <Helmet title={product.title}>
    <Section>
      <SectionBody>
        <ProductView product={product}/>
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
