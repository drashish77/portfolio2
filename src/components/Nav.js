import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import menu from '../menu (3).svg';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className='relative flex flex-wrap items-center justify-between px-2 navbar-expand-lg bg-red-600'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-end'>
            <NavLink
              activeClassName='text-white'
              className='inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest'
              to='/'
              exact>
              Alex
            </NavLink>
            <button
              className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block mdg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <img
                alt='tailwind menu'
                src={menu}
                className='h-8 lg:hidden'></img>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id='example-navbar-danger'>
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='nav-item'>
                <NavLink
                  activeClassName='text-red-100 bg-red-700'
                  className='inline-flex items-center py-1 sm:py-3 px-3 my-1 lg:my-6  rounded text-red-200 hover:text-green-800'
                  to='/post'>
                  Blog Post
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  activeClassName='text-red-100 bg-red-700'
                  className='inline-flex items-center py-1 sm:py-3 px-3 my-1 lg:my-6 rounded text-red-200 hover:text-green-800'
                  to='/project'>
                  Projects
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  activeClassName='text-red-100 bg-red-700'
                  className='inline-flex items-center py-1 sm:py-3 px-3 my-1 lg:my-6 rounded text-red-200 hover:text-green-800'
                  to='/about'>
                  About Me
                </NavLink>
              </li>
            </ul>
            <div className='hidden lg:inline-flex p-3 my-6'>
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
        </div>
      </nav>
    </>
  );
}
