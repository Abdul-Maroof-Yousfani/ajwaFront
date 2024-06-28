import React, { useEffect } from 'react';
import Header from '../../components/Website/Header';
import Footer from '../../components/Website/Footer';

import SingleProduct from '../../components/Website/categories/SingleProduct';
import { useParams } from 'react-router-dom';
import LikeProducts from '../../components/Website/Like/LikeProducts';

export default function ProductDetail() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  }, []);

  return (
    <>
      <Header />
      <SingleProduct id={id} />
      <LikeProducts/>
      <Footer />
    </>
  );
}
