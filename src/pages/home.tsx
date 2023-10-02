const Home = () => (
  <>
    <header className="sm:py-16">
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
        A Seasoned Frontend Engineer <br /> Based on Tegal, Indonesia.
      </h1>
      <p className="sm:w-1/2 mb-2">
        I am Anggih Septiawan, Frontend Engineer with 4 years of expertise in
        web development, proficient in React and TypeScript. Connect with me to
        talk more about web, and how we can create meaningful products.
      </p>
      <div className="flex gap-8 py-4">
        <img src="/mail.svg" alt="mail-icon" />
        <a href="https://www.linkedin.com/in/anggihseptiawan/" target="_blank">
          <img src="/linkedin.svg" alt="linkedin-icon" />
        </a>
        <a href="https://github.com/anggihseptiawan" target="_blank">
          <img src="/github.svg" alt="github-icon" />
        </a>
      </div>
    </header>

    <main className="homepage py-6">
      <section className="py-4 mb-16">
        <h3 className="text-xl font-semibold tracking-tight mb-3">
          Highligth Projects
        </h3>
        <p>Here are some of the projects I build.</p>
        <div className="grid sm:grid-cols-3 gap-3 py-3">
          <a
            href="https://meetface.vercel.app/"
            className="rounded-md border-4 border-emerald-400"
            target="_blank"
          >
            <img src="/project1.png" alt="meetface" />
          </a>
          <a
            href="https://roastedcoffee.vercel.app/"
            className="rounded-md border-4 border-emerald-400"
            target="_blank"
          >
            <img src="/project2.png" alt="meetface" />
          </a>
          <a
            href="https://clothing-shop.vercel.app/"
            className="rounded-md border-4 border-emerald-400"
            target="_blank"
          >
            <img src="/project3.png" alt="meetface" />
          </a>
        </div>
      </section>

      <section className="py-4">
        <h3 className="text-xl font-semibold tracking-tight mb-3">
          Recent Posts
        </h3>
        <p>Here are the latest post I made.</p>

        <div className="grid sm:grid-cols-3 gap-4 py-4">
          <div className="mb-3">
            <img
              src="/blog1.jpg"
              className="w-full rounded-md mb-2"
              alt="Short Circuiting and nullish coalescing"
            />
            <h5 className="text-lg font-semibold mb-1">
              Short Circuiting and nullish coalescing
            </h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum tenetur vitae omnis, enim beatae optio laborum illo
              blanditiis quia quae..
            </p>
          </div>
          <div className="mb-3">
            <img
              src="/blog2.jpg"
              className="w-full rounded-md mb-2"
              alt="Short Circuiting and nullish coalescing"
            />
            <h5 className="text-lg font-semibold mb-1">Logical Assignment</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum tenetur vitae omnis, enim beatae optio laborum illo
              blanditiis quia quae..
            </p>
          </div>
          <div className="mb-3">
            <img
              src="/blog3.jpg"
              className="w-full rounded-md mb-2"
              alt="Short Circuiting and nullish coalescing"
            />
            <h5 className="text-lg font-semibold mb-1">Hoisting</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum tenetur vitae omnis, enim beatae optio laborum illo
              blanditiis quia quae..
            </p>
          </div>
        </div>
      </section>
    </main>
  </>
)

export default Home
