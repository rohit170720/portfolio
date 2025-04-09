"use client";
import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-[var(--bg-light)] text-[var(--text-light)] dark:bg-[var(--bg-dark)] dark:text-[var(--text-dark)] px-4 py-2 shadow-lg dark:shadow-gray-800'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo / Brand */}
        <Link href='/'>
          <p className='text-xl font-bold'>Rohit Renke</p>
        </Link>

        <div className='flex'>
          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-4 items-center'>
            <Link href='/about'>
              <p className=' hover:text-gray-400'>About</p>
            </Link>
            <Link href='/projects'>
              <p className=' hover:text-gray-400'>Projects</p>
            </Link>
            <Link href='/contact'>
              <p className=' hover:text-gray-400'>Contact</p>
            </Link>
          </div>

          <DarkModeToggle />

          {/* Mobile Menu Button */}
          <button
            type='button'
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden  focus:outline-none cursor-pointer'
            aria-label='Toggle menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden mt-2'>
          <Link href='/about'>
            <p className='block px-4 py-2  hover:bg-gray-300 dark:hover:bg-gray-700'>
              About
            </p>
          </Link>
          <Link href='/projects'>
            <p className='block px-4 py-2  hover:bg-gray-300 dark:hover:bg-gray-700'>
              Projects
            </p>
          </Link>
          <Link href='/contact'>
            <p className='block px-4 py-2  hover:bg-gray-300 dark:hover:bg-gray-700'>
              Contact
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
}
