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
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className=' font-bold cursive leading-none lg:leading-snug home-name'>
          Hi!!, I am Alexander
        </h1>
      </section>
    </main>
  );
};

export default Home;
