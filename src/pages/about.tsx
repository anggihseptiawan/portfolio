function About() {
  return (
    <main className="sm:py-8">
      <section className="flex flex-col sm:flex-row gap-6 mb-10">
        <img
          src="/profile.png"
          className="rounded-md sm:w-1/3"
          alt="profile-image"
        />
        <div>
          <h3 className="text-2xl font-semibold tracking-tight mb-3">
            Hey there 👋, I am Anggih Septiawan, and here is my little story 🙌
          </h3>
          <p className="mb-2">
            Welcome to my digital journey, where I transformed from a bewildered
            college student to a passionate web developer. In 2017, I ventured
            into the world of programming with Java, but my interest only truly
            sparked during my third semester when I discovered HTML and CSS.
            This marked the beginning of my journey into web development.
          </p>
          <p className="mb-2">
            In 2019, I took my first step into the professional world as a web
            developer. My initial project was a company profile built using PHP
            and WordPress. However, my fascination for Frontend Development grew
            stronger, leading me to specialize in crafting visually appealing
            and user-friendly interfaces with React.js, along with frameworks
            like Next.js and Remix, complemented by TypeScript.
          </p>
          <p className="mb-2">
            Beyond web development, I explored mobile and desktop app
            development using React Native and Electron, broadening my skill
            set. The rapidly evolving technology landscape continues to excite
            me, motivating me to create beautiful and meaningful products.
          </p>
          <p className="mb-2">
            I invite you to join me on this journey where innovation knows no
            bounds, creativity thrives, and every day offers new opportunities
            to build exceptional digital experiences.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
        <p className="mb-3">
          Here are the tech stack that I am usually use to build things.
        </p>

        <div className="flex flex-wrap gap-3">
          <img
            src="/javascript.svg"
            className="w-12 h-12 object-contain rounded-sm"
            alt="javascript"
          />
          <img
            src="/react.svg"
            className="w-12 h-12 object-contain"
            alt="react"
          />
          <img
            src="/typescript.svg"
            className="w-12 h-12 object-contain rounded-sm"
            alt="typscript"
          />
          <img
            src="/nextjs.svg"
            className="w-12 h-12 object-contain"
            alt="nextjs"
          />
          <img
            src="/remix.svg"
            className="w-12 h-12 object-contain"
            alt="remix"
          />
          <img
            src="/tailwindcss.svg"
            className="w-12 h-12 object-contain"
            alt="tailwindcss"
          />
          <img
            src="/electron.svg"
            className="w-12 h-12 object-contain"
            alt="electron"
          />
          <img
            src="/nodejs.svg"
            className="w-12 h-12 object-contain"
            alt="nodejs"
          />
        </div>
      </section>
    </main>
  )
}

export default About
