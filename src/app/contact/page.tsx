import React from "react";

const ContactSection = () => {
  return (
    <section className=' py-16'>
      <div className='max-w-4xl mx-auto px-4 text-center'>
        <h2 className='text-4xl font-bold  mb-4'>Let’s Connect!</h2>
        <p className='text-xl  mb-8'>
          I&apos;m always eager to discuss new projects, creative ideas, or
          opportunities to collaborate. Drop me a line, and let&apos;s build
          something remarkable together.
        </p>
        <a
          href='mailto:rohitkrenke@gmail.com'
          className='inline-block px-8 py-4 text-lg font-medium border border-[#61dafb] text-[#61dafb] rounded-lg transition-colors duration-300 hover:bg-[#61dafb] hover:text-white'
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
