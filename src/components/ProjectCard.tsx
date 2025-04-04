"use client";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectUrl,
}: ProjectCardProps) => {
  return (
    <div className='bg-gray-800 dark:shadow-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition'>
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className='rounded-t-lg w-full'
      />
      <div className='p-4'>
        <h3 className='text-xl font-bold text-white'>{title}</h3>
        <p className='text-gray-400 mt-2'>{description}</p>
        <Link
          href={projectUrl}
          className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
