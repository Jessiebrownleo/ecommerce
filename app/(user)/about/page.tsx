
import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Ecommerce Web about us page',
    description:
        'Ecommerce Website about us page is for describe about this website in more detail',
}
export default function AboutPage() {
  return (
    <div className="py-16 bg-white dark:bg-gray-800">
      <div className="container m-auto px-6 text-gray-600 dark:text-white md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <Image src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy"  />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 dark:text-white font-bold md:text-4xl">We are passionate about e-commerce</h2>
            <p className="mt-6 text-gray-600 dark:text-gray-300">Our team is dedicated to providing the best online shopping experience. We strive to bring you the highest quality products, at the best prices, with the greatest customer service. We are constantly innovating and improving our platform to better serve our customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}