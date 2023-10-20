const Projects = () => (
  <main className="projects sm:py-8">
    <section>
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        Project Showcase
      </h1>
      <p>Here are some of the things that I made on the web.</p>
    </section>

    <section className="grid sm:grid-cols-2 gap-4 py-8">
      <div>
        <img
          src={import.meta.env.VITE_HYGRAPH_ASSETS + "pEsD5EWTbenFfZRjuQBQ"}
          className="rounded-md mb-2 border-4 border-emerald-400"
          alt="flex-pdf"
        />
        <p>
          The perfect solution for all your PDF editing needs, allowing you to
          merge, compress, and edit PDF files directly in your browser
        </p>
        <p className="mb-3">Build with: React, TypeScript & Tailwind</p>
        <a
          href="https://flexpdf.vercel.app/"
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
      <div>
        <img
          src={import.meta.env.VITE_HYGRAPH_ASSETS + "O0PAOiQqCf8svcGPPYQE"}
          className="rounded-md mb-2 border-4 border-emerald-400"
          alt="project-1"
        />
        <p>
          A simple landing page designed by{" "}
          <a
            href="https://www.frontendmentor.io/"
            target="_blank"
            className="font-semibold text-emerald-500 dark:text-emerald-300"
            rel="noopener noreferer"
          >
            Frontend Mentor
          </a>
        </p>
        <p className="mb-3">Build with: React, TypeScript & Chakra-UI</p>
        <a
          href="https://meetface.vercel.app/"
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
      <div>
        <img
          src={import.meta.env.VITE_HYGRAPH_ASSETS + "KJ9ytltSSanfUPkzHWcA"}
          className="rounded-md mb-2 border-4 border-emerald-400"
          alt="project-2"
        />
        <p>
          Another simple landing page designed by{" "}
          <a
            href="https://www.frontendmentor.io/"
            target="_blank"
            rel="noopener noreferer"
            className="font-semibold text-emerald-500 dark:text-emerald-300"
          >
            Frontend Mentor
          </a>
        </p>
        <p className="mb-3">Build with: React, TypeScript & Chakra-UI</p>
        <a
          href="https://roastedcoffee.vercel.app/"
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
      <div>
        <img
          src={import.meta.env.VITE_HYGRAPH_ASSETS + "kWsDvTTQ1aWf1DJHwqMG"}
          className="rounded-md mb-2 border-4 border-emerald-400"
          alt=""
        />
        <p>A clothing shop website</p>
        <p className="mb-3">Build with: React, Redux, Sass, & Firebase</p>
        <a
          href="https://clothing-shop.vercel.app/"
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
      <div>
        <img
          src={import.meta.env.VITE_HYGRAPH_ASSETS + "PWsRqVtoRpyP36p4g5Eu"}
          className="rounded-md mb-2 border-4 border-emerald-400"
          alt=""
        />
        <p>A simple website that shows a bunch of mosters</p>
        <p className="mb-3">Build with: React, Axios, & TypeScript</p>
        <a
          href="https://wild-monster.vercel.app/"
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
      <div>
        <img
          src={import.meta.env.VITE_HYGRAPH_ASSETS + "7ODAlSg4SgaFkyIjeYYx"}
          className="rounded-md mb-2 border-4 border-emerald-400"
          alt=""
        />
        <p>My side project, a news portal website, build in 2020</p>
        <p className="mb-3">Build with: Laravel, Bootstrap, & Owl Carousel</p>
        <a
          href="https://kabarsukabumi.com/"
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
      <div>
        <img
          src={import.meta.env.VITE_HYGRAPH_ASSETS + "yEEQSjYQT1yU13jrFpyE"}
          className="rounded-md mb-2 border-4 border-emerald-400"
          alt=""
        />
        <p>Official website for Lenovo Legion back in 2019</p>
        <p className="mb-3">Build with: Laravel, Bootstrap, & Slick Js</p>
      </div>
    </section>
  </main>
)

export default Projects
