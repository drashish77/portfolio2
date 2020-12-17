import React from 'react';
import image from '../flowers.jpg';

const Home = () => {
  return (
    <main className=''>
      <img
        src={image}
        alt='background'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 sm:pt-28 md:pt-48 lg:pt-64 px-8'>
        <h1 className=' font-bold cursive leading-none lg:leading-snug text-2xl sm:text-4xl md:text-6xl lg:text-8xl'>
          Hi!!, I am Alexander
        </h1>
      </section>
    </main>
  );
};

export default Home;
