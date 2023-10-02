const Posts = () => (
  <main className="sm:py-8">
    <section>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Latest Posts</h1>
      <p>
        Here are some post that I made, talking about frontend related stuff.
      </p>
    </section>

    <section>
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            tenetur vitae omnis, enim beatae optio laborum illo blanditiis quia
            quae..
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            tenetur vitae omnis, enim beatae optio laborum illo blanditiis quia
            quae..
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            tenetur vitae omnis, enim beatae optio laborum illo blanditiis quia
            quae..
          </p>
        </div>
      </div>
    </section>
  </main>
)

export default Posts
