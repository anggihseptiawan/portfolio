function About() {
  return (
    <main className="sm:py-8">
      <section className="flex flex-col sm:flex-row gap-6 mb-10">
        <div className="sm:w-1/3">
          <img
            src="/profile.png"
            className="rounded-md w-full"
            alt="profile-image"
          />
        </div>
        <div className="sm:w-2/3">
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
        <h3 className="text-xl font-semibold mb-3">Work Experience</h3>

        <div className="flex flex-col sm:flex-row gap-6">
          <div>
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

                <ul className="list-inside">
                  <li className="list-disc">
                    Code refactor, reduce the code of an apps by ~10% and makes
                    the code more concise, easy to maintain and scalable
                  </li>
                  <li className="list-disc">
                    Create a CLI tool to configure what apps to include/exclude
                    and drop unintended apps and its dependencies so the
                    monorepo didn't contain unnecessary stuff
                  </li>
                  <li className="list-disc">
                    Responsible to all inquiries (question, bug report, etc)
                    from client while being an L4
                  </li>
                  <li className="list-disc">
                    Develop new feature, bug fix, and doing code review
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

                <ul className="list-inside">
                  <li className="list-disc">
                    Migrate some web apps from Laravel to React Js
                  </li>
                  <li className="list-disc">
                    Convert the UI Design into a website without skimping the
                    small details
                  </li>
                  <li className="list-disc">
                    Do some research and decide what FE tech stack that we want
                    to use to build the products
                  </li>
                  <li className="list-disc">
                    Adopt several lib/tools to improve DX (Developer Experience)
                  </li>
                  <li className="list-disc">
                    Distribute the Frontend related task to the team
                  </li>
                  <li className="list-disc">
                    Brainstorm the products with the Product Managers and all
                    engineers
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
                <ul className="list-inside">
                  <li className="list-disc">
                    Build an internal company profile
                  </li>
                  <li className="list-disc">
                    Develop a learning curriculum for the frontend class
                  </li>
                  <li className="list-disc">
                    Teaching and guiding participants in a class
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 mb-5">
              <div className="w-16 h-16 rounded-md self-start bg-slate-200 flex-none" />
              <div>
                <div className="mb-2">
                  <p className="font-semibold">Web Developer</p>
                  <p>
                    Jagonya Bisnis - <span> [July 2019 - Dec 2019]</span>
                  </p>
                </div>
                <ul className="list-inside">
                  <li className="list-disc">
                    Build several websites for the governments
                  </li>
                  <li className="list-disc">
                    Presenting the progress/features that we made and share a
                    blocker/risk if any
                  </li>
                  <li className="list-disc">
                    Discuss the feature that we want to add to the website
                  </li>
                  <li className="list-disc">
                    Work closely with ASN to gather feedback and set the same
                    expectation about the feature that we build
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
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
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
