import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
  return (
    <header className='bg-red-600'>
      <div className='container mx-auto flex justify-between place-self-center'>
        <nav className='flex'>
          <NavLink
            activeClassName='text-white'
            className='inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest'
            to='/'
            exact>
            Alex
          </NavLink>
          <NavLink
            activeClassName='text-red-100 bg-red-700'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
            to='/post'>
            Blog Post
          </NavLink>
          <NavLink
            activeClassName='text-red-100 bg-red-700'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
            to='/project'>
            Projects
          </NavLink>
          <NavLink
            activeClassName='text-red-100 bg-red-700'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
            to='/about'>
            About Me
          </NavLink>
        </nav>
        <div className='hidden md:inline-flex p-3 my-6'>
          <SocialIcon
            url='https://twitter.com/dr_coderr'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.facebook.com/dr.ashishhh/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.linkedin.com/in/ashishhh/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
