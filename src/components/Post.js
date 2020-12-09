import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

const Post = () => {
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=='post']{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt 
      }
    }`
      )
      .then((data) => setPostData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className='bg-green-100 min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl flex justify-center cursive'>
          Blog Posts page
        </h1>
        <h2 className='text-lg to-gray-600 flex justify-center mb-12'>
          Welcome to my blog post
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={`/post/${post.slug.current}`} key={post.slug.current}>
                  <span
                    className='block h64 relative rounded shadow leading-snug bg-white border-l-8 bg-green-400'
                    key={index}>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className='w-full h-full rounded-r object-cover absolute'
                    />
                    <span className=' block relative h-full flex justify-end items-end pr-4 pb-4'>
                      <h3 className='to-gray-800 text-lg font-bold px-3 py-4 bg-red-700 to-red-100 bg-opacity-75 rounded'>
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Post;