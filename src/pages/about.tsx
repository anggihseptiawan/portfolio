function About() {
  return (
    <main className="sm:py-8">
      <section className="flex flex-col sm:flex-row gap-8 mb-10">
        <div className="sm:w-1/3">
          <img
            src={`${import.meta.env.VITE_HYGRAPH_ASSETS}LPm2RxmSKurpWCHMjtDM`}
            className="rounded-md w-full"
            alt="profile-image"
          />
        </div>
        <div className="sm:w-2/3">
          <h3 className="text-2xl font-semibold tracking-tight mb-3">
            Hey there 👋, I am Anggih Septiawan, and here is my little story 🙌
          </h3>
          <p className="mb-2 text-justify">
            Welcome to my digital journey, where I transformed from a bewildered
            college student to a passionate web developer. In 2017, I ventured
            into the world of programming with Java, but my interest only truly
            sparked during my third semester when I discovered HTML and CSS.
            This marked the beginning of my journey into web development.
          </p>
          <p className="mb-2 text-justify">
            In 2020, I took my first step into the professional world as a web
            developer. My initial project was a company profile built using PHP.
            However, my fascination for Frontend Development grew stronger,
            leading me to specialize in crafting visually appealing and
            user-friendly interfaces with React.js, along with frameworks like
            Next.js and Remix, complemented by TypeScript.
          </p>
          <p className="mb-2 text-justify">
            Beyond web development, I explored mobile and desktop app
            development using React Native and Electron, broadening my skill
            set. The rapidly evolving technology landscape continues to excite
            me, motivating me to create beautiful and meaningful products.
          </p>
          <p className="mb-2 text-justify">
            I invite you to join me on this journey where innovation knows no
            bounds, creativity thrives, and every day offers new opportunities
            to build exceptional digital experiences.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Work Experience</h3>

        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-2/3">
            <div className="flex gap-4 mb-5">
              <img
                className="w-16 rounded-md self-start"
                src="/accelbyte.jpeg"
                alt="accelbyte"
              />
              <div>
                <div className="mb-2">
                  <p className="font-semibold">Software Engineer - Frontend</p>
                  <p>
                    AccelByte - <span>[June 2022 - August 2023]</span>
                  </p>
                </div>

                <ul className="list-outside pl-4">
                  <li className="list-disc">
                    Refactored application code, reducing overall codebase by
                    ~5%, improving maintainability, scalability, and
                    readability.
                  </li>
                  <li className="list-disc">
                    Developed a custom CLI tool to streamline app configuration,
                    enabling the inclusion/exclusion of specific apps and
                    dependencies, optimizing the monorepo for efficiency.
                  </li>
                  <li className="list-disc">
                    Handled all client inquiries (questions, bug reports, etc.)
                    as an L4, providing timely and effective solutions.
                  </li>
                  <li className="list-disc">
                    Contributed to feature development, bug fixes, and code
                    reviews, ensuring high-quality standards and consistent
                    project delivery.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 mb-5">
              <img
                className="w-16 rounded-md self-start"
                src="/kds.jpeg"
                alt="Klik Digital Sinergi"
              />
              <div>
                <div className="mb-2">
                  <p className="font-semibold">Frontend Developer</p>
                  <p>
                    Klik Digital Sinergi - <span>[Nov 2020 - June 2022]</span>
                  </p>
                </div>

                <ul className="list-outside pl-4">
                  <li className="list-disc">
                    Led the migration of web applications from Laravel to
                    React.js, enhancing performance and scalability.
                  </li>
                  <li className="list-disc">
                    Transformed UI designs into fully functional websites,
                    ensuring pixel-perfect implementation and attention to
                    detail.
                  </li>
                  <li className="list-disc">
                    Conducted research and selected the optimal frontend tech
                    stack, aligning with project goals and future scalability.
                  </li>
                  <li className="list-disc">
                    Introduced and integrated tools and libraries to improve
                    developer experience (DX) and streamline workflows.
                  </li>
                  <li className="list-disc">
                    Managed and delegated frontend tasks within the team,
                    ensuring efficient collaboration and timely delivery.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 mb-5">
              <img
                className="w-16 rounded-md self-start"
                src="/armina.jpeg"
                alt="Arminadaily"
              />

              <div>
                <div className="mb-2">
                  <p className="font-semibold">Frontend Developer</p>
                  <p>
                    ARMINAREKA PHARMASIA PRATAMA -
                    <span> [Feb 2020 - Nov 2020]</span>
                  </p>
                </div>
                <ul className="list-outside pl-4">
                  <li className="list-disc">
                    Developed and launched a compelling company profile,
                    highlighting the organization's mission, services, and
                    values to enhance brand visibility and engagement.
                  </li>
                  <li className="list-disc">
                    Designed and implemented a comprehensive frontend
                    curriculum, equipping participants with essential skills and
                    practical knowledge in frontend development.
                  </li>
                  <li className="list-disc">
                    Led and mentored a cohort of frontend learners, providing
                    guidance, support, and feedback to ensure effective skill
                    acquisition and project success.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-1/3">
            <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
            <p className="mb-3">
              Here are the tech stack that I am usually use to build things.
            </p>

            <div className="flex flex-wrap gap-3">
              <img
                src="/javascript_icon.svg"
                className="w-12 h-12 object-contain dark:invert rounded-sm"
                alt="javascript"
              />
              <img
                src="/react.svg"
                className="w-12 h-12 object-contain dark:invert"
                alt="react"
              />
              <img
                src="/typescript_icon.svg"
                className="w-12 h-12 object-contain dark:invert rounded-sm"
                alt="typscript"
              />
              <img
                src="/nextjs_icon.svg"
                className="w-12 h-12 object-contain dark:invert"
                alt="nextjs"
              />
              <img
                src="/remix.svg"
                className="w-12 h-12 object-contain dark:invert"
                alt="remix"
              />
              <img
                src="/tailwind_icon.svg"
                className="w-12 h-12 object-contain dark:invert"
                alt="tailwindcss"
              />
              <img
                src="/electron_icon.svg"
                className="w-12 h-12 object-contain dark:invert"
                alt="electron"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
