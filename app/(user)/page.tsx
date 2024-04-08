'use client'
import React, { useEffect, useState } from 'react';
import { GlobeDemo } from '@/components/ui/globe_Demo';
import { HeroParallax } from '@/components/ui/hero-parallax';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://store.istad.co/api/products')
      .then(response => response.json())
      .then(data => setProducts(data.results))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <main>
      <GlobeDemo/>
      <HeroParallax products={products}/>
    </main>
  );
}