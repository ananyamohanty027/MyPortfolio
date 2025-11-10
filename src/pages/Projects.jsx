import React from "react";
import { profile } from "../data/profile";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = profile.projects;

  return (
    <section className="transition-colors duration-500">
      <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100 transition-colors">
        Selected Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
