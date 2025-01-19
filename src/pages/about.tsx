import { works } from "../constants/works"

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
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-2/3">
            <h3 className="text-xl font-semibold mb-3">Work Experience</h3>
            {works.map((work, idx) => (
              <div key={idx} className="flex gap-4 mb-5">
                <img
                  className="w-16 rounded-md self-start"
                  src={work.imageUrl}
                  alt={work.subTitle}
                />
                <div>
                  <div className="mb-2">
                    <p className="font-semibold">{work.title}</p>
                    <p>{work.subTitle}</p>
                  </div>
                  {work.workItems.map((item, idx) => (
                    <p key={idx} className="mb-2">
                      {item.content}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full sm:w-1/3">
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
                src="/typescript.svg"
                className="w-12 h-12 object-contain rounded-sm"
                alt="typscript"
              />
              <img
                src="/react.svg"
                className="w-12 h-12 object-contain"
                alt="react"
              />
              <img
                src="/nextjs_icon_dark.svg"
                className="w-12 h-12 object-contain"
                alt="nextjs"
              />
              <img
                src="/electron.svg"
                className="w-12 h-12 object-contain"
                alt="electron"
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
                src="/aws_dark.svg"
                className="w-12 h-12 object-contain invert dark:invert-0"
                alt="aws"
              />
              <img
                src="/nodejs.svg"
                className="w-12 h-12 object-contain"
                alt="nodejs"
              />
              <img
                src="/vitejs.svg"
                className="w-12 h-12 object-contain"
                alt="vitejs"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
