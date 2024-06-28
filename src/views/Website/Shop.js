import React, { useEffect } from 'react';
import ProductShop from '../../components/Website/categories/ProductShop';
import Header from '../../components/Website/Header';
import Footer from '../../components/Website/Footer';
import { useParams } from 'react-router-dom';

export default function Shop() {
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
      <ProductShop id={id} />
      <Footer />
    </>
  );
}
