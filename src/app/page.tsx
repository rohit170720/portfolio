"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center h-screen text-center'>
      <Image
        src='/ProfileImage.png'
        alt='Rohit Renke'
        height={200}
        width={200}
        className='h-40 w-40 md:h-52 md:w-52'
      />
      <motion.h1
        className='text-3xl font-bold md:text-5xl'
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Rohit Renke
      </motion.h1>
      <p className='text-gray-400 text-sm md:text-lg mt-4'>
        React & Next.js Developer | Frontend Engineer
      </p>
      <div className='mt-6 space-x-4'>
        <Link
          href='/about'
          className='px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
        >
          About
        </Link>
        <Link
          href='/contact'
          className='px-4 py-2 md:px-6 md:py-3 border border-gray-400  rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700'
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
