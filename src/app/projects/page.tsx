"use client";
import { projects } from "@/constants/data";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <section className='container mx-auto py-10'>
      <h1 className='text-3xl font-bold text-center mb-6'>
        My Projects - In progress
      </h1>
      <div className='grid md:grid-cols-2 gap-6'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
