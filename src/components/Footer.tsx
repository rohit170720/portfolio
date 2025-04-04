"use client";

const Footer = () => {
  return (
    <footer className=' p-4 mt-10 text-center '>
      <p>&copy; {new Date().getFullYear()} Rohit Renke.</p>
      <div className='flex justify-center space-x-4 mt-2'>
        <a
          href='https://github.com/rohit170720'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-gray-400'
        >
          GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/rohit-renke'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-gray-400'
        >
          LinkedIn
        </a>
        <a href='mailto:rohitkrenke@gmail.com' className='hover:text-gray-400'>
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
