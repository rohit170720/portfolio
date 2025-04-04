"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { experiences, skills } from "@/constants/data";

export default function About() {
  return (
    <section className='container mx-auto py-10'>
      <div className='flex flex-col md:flex-row items-start justify-center gap-10'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='w-full md:w-1/3 flex justify-center '
        >
          <Image
            src='./ProfileImage.png'
            alt='Rohit Renke'
            width={300}
            height={300}
            className='rounded-full border-white border-4 border-primary shadow-lg dark:shadow-gray-800 bg-white h-52 w-52 md:h-64 md:w-64 object-cover'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='w-full md:w-2/3'
        >
          <h1 className='text-2xl font-bold text-primary md:text-3xl'>
            About Me
          </h1>
          <p className='text-gray-700 dark:text-gray-300 mt-4 text-sm md:text-[1rem]'>
            Front-end web developer with 3.5 years of experience in the full web
            application development lifecycle, from design and development to
            implementation. Proficient in HTML, CSS, JavaScript, React, and
            Next.js. Experience includes migrating applications, developing
            reusable components, integrating APIs, implementing responsive
            designs, and collaborating in Agile environments. .
          </p>
          <h2 className='text-xl font-semibold mt-6 md:text-2xl'>
            Work Experience
          </h2>
          <div className='grid gap-8 mt-4'>
            {/* Loop through experience data */}
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className=' p-6 rounded-lg shadow dark:shadow-gray-500 hover:shadow-lg transition-shadow duration-300'
              >
                <h3 className='text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-50'>
                  {exp.title}
                </h3>
                <p className='text-lg text-indigo-600'>{exp.company}</p>
                <span className='block text-gray-500 dark:text-gray-400 my-2'>
                  {exp.duration}
                </span>
                <p className='mt-4 text-gray-700 dark:text-gray-300 text-sm md:text-[1rem]'>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          <h2 className='text-2xl font-semibold mt-6'>Skills</h2>
          <div className='flex flex-wrap gap-3 mt-3'>
            {skills.map((skill) => (
              <span
                className='bg-primary px-2 py-1 md:px-4 md:py-2 rounded-lg border border-gray-50 shadow-sm'
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
          <div className='mt-6 md:mt-10'>
            <Link
              href='/rohit_renke_resume.pdf'
              download
              className='bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700'
            >
              Download Resume
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
