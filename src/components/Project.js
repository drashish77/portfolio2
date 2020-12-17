import React, { useState, useEffect } from 'react';
import sanityClient from '../client';

const Project = () => {
  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="project"]{
  title,date,place,description,projectType,link,tags
}`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className='bg-gray-100 min-h-screen p-12'>
      <section className='container m-auto'>
        <h1 className='text-4xl md:text-5xl flex justify-center cursive'>
          My Projects
        </h1>
        <h2 className='text-lg text-green-600 flex justify-center mt-4 mb-12'>
          Welcome to my projects page!
        </h2>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projectData &&
            projectData.map((project, index) => (
              <article className='relative rounded-lg shadow-xl bg-white p-6 md:p-16'>
                <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
                  <a
                    href={project.link}
                    alt={project.title}
                    target='_blank'
                    rel='noopener noreferrer'
                    className=''>
                    {project.title}
                  </a>
                </h3>
                <div className='text-gray-500 text-xs md:flex md:justify-between'>
                  <p className=''>
                    <strong className='font-bold'>Finished on</strong>:{' '}
                    {new Date(project.date).toLocaleDateString()}
                  </p>
                  <p className=''>
                    <strong className='font-bold'>Company</strong>:{' '}
                    {project.place}
                  </p>
                  <p className=''>
                    <strong className='font-bold'>Type</strong>:{' '}
                    {project.projectType}
                  </p>
                </div>
                <div className=''>
                  <p className='my-6 text-lg text-gray-700 leading-relaxed'>
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='text-xl text-red-500 font-bold hover:underline hover:text-red-400'>
                    View The Project{' '}
                    <span className='' role='img' aria-label='right pointer'>
                      👉
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Project;
