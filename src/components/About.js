import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import sea from '../sea.jpg';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=='author']{
      name,
      bio,
      "authorImage":image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);
  if (!author)
    return <div className='text-center text-4xl pt-64'>Loading...</div>;
  return (
    <main className='relative'>
      <img src={sea} alt='Sea sight' className='absolute w-full' />
      <div className='p-10 lg:pt-48 container mx-auto relative'>
        <section className='bg-green-800 rounded-lg shadow-2x lg:flex p-20'>
          <img
            src={urlFor(author.authorImage).url()}
            alt={author.name}
            className='w-32 rounded h-32 lg:w-64 lg:h-64 mr-8'
          />
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='cursive text-1xl sm:text-2xl md:text-3xl lg:text-6xl text-green-300 my-2 lg:mb-4'>
              Hey there. I'm {'  '}
              <span className='text-green-100'>{author.name}</span>
            </h1>
            <div className='prose lg:prose-xl text-white'>
              <BlockContent
                blocks={author.bio}
                projectId='0utzb99y'
                dataset='production'
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
