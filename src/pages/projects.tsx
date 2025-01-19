import { projects } from "../constants/projects"

const Projects = () => (
  <main className="projects sm:py-8">
    <section>
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Project Showcase
      </h1>
      <p>Here are some of the things that I made on the web.</p>
    </section>

    <section className="grid sm:grid-cols-2 gap-4 py-8">
      {projects.map((project, idx) => (
        <div key={idx + project.imageId}>
          <img
            src={import.meta.env.VITE_HYGRAPH_ASSETS + project.imageId}
            className="rounded-md mb-2 border-4 border-emerald-400"
            alt="flex-pdf"
          />
          <p>{project.title}</p>
          <p className="mb-3">Build with: {project.buildWith}</p>
          <a
            href={project.url}
            className="flex gap-1 items-center font-semibold text-emerald-500 dark:text-emerald-300"
            target="_blank"
            rel="noopener noreferer"
          >
            <span>See it live</span>
            <img
              src="/external-link.svg"
              className="w-4 h-4"
              alt="external-link"
            />
          </a>
        </div>
      ))}
    </section>
  </main>
)

export default Projects
