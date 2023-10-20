import { useQuery } from "@apollo/client"
import { Link } from "react-router-dom"
import { GET_POST } from "../constants/query"
import { Post } from "../types/post"

const Home = () => {
  const { loading, error, data } = useQuery(GET_POST)

  return (
    <>
      <header className="sm:py-16">
        <div className="inline-flex p-1 rounded-[3px] gap-2 mb-2 border border-emerald-500">
          <small className="flex items-center bg-emerald-500 text-white rounded-sm px-2">
            Availability
          </small>
          <small>I am currently open for a new opportunity</small>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
          A Seasoned{" "}
          <span className="text-emerald-500 dark:text-emerald-300">
            Frontend Engineer
          </span>{" "}
          <br /> Based on Tegal, Indonesia.
        </h1>
        <p className="sm:w-1/2 mb-2">
          I am Anggih Septiawan, Frontend Engineer with 4 years of expertise in
          web development, proficient in React and TypeScript. Connect with me
          to talk more about web, and how we can create meaningful products.
        </p>
        <div className="flex gap-4 sm:gap-6 py-4">
          <a
            href="https://www.linkedin.com/in/anggihseptiawan/"
            target="_blank"
            rel="noopener noreferer"
          >
            <img
              src={import.meta.env.VITE_HYGRAPH_ASSETS + "ODOj6BemRjKJhXc45BLx"}
              className="w-6"
              alt="linkedin"
            />
          </a>
          <a
            href="https://github.com/anggihseptiawan"
            target="_blank"
            rel="noopener noreferer"
          >
            <img
              src={import.meta.env.VITE_HYGRAPH_ASSETS + "n14i95PGRgi48RCNKIUK"}
              className="w-6"
              alt="github-icon"
            />
          </a>
          <div className="flex gap-2">
            <img
              src={import.meta.env.VITE_HYGRAPH_ASSETS + "wnMuNw6oQgubNW1XWLG7"}
              className="w-6"
              alt="mail"
            />
            <span>anggihseptiawan@gmail.com</span>
          </div>
        </div>
      </header>

      <main className="homepage py-6">
        <section className="py-4 mb-16">
          <h3 className="text-xl font-semibold tracking-tight mb-3">
            Recent Projects
          </h3>
          <p>Here are some of the projects I build.</p>
          <div className="grid sm:grid-cols-3 gap-3 py-3">
            <a
              href="https://flexpdf.vercel.app/"
              className="rounded-md border-4 border-emerald-400"
              target="_blank"
              rel="noopener noreferer"
            >
              <img
                src={
                  import.meta.env.VITE_HYGRAPH_ASSETS + "pEsD5EWTbenFfZRjuQBQ"
                }
                alt="flexpdf"
              />
            </a>
            <a
              href="https://roastedcoffee.vercel.app/"
              className="rounded-md border-4 border-emerald-400"
              target="_blank"
              rel="noopener noreferer"
            >
              <img
                src={
                  import.meta.env.VITE_HYGRAPH_ASSETS + "KJ9ytltSSanfUPkzHWcA"
                }
                alt="coffee-shop"
              />
            </a>
            <a
              href="https://clothing-shop.vercel.app/"
              className="rounded-md border-4 border-emerald-400"
              target="_blank"
              rel="noopener noreferer"
            >
              <img
                src={
                  import.meta.env.VITE_HYGRAPH_ASSETS + "kWsDvTTQ1aWf1DJHwqMG"
                }
                alt="commerce"
              />
            </a>
          </div>
        </section>

        <section className="post py-4">
          <h3 className="text-xl font-semibold tracking-tight mb-3">
            Recent Posts
          </h3>
          <p>Here are the latest post I made.</p>

          <div className="grid sm:grid-cols-3 gap-4 py-4">
            {loading && <p>loading..</p>}
            {error && <p>Couldn't get blog post</p>}
            {data &&
              data.posts.map((post: Post) => (
                <div key={post.slug} className="mb-3">
                  <img
                    src={post.thumbnail.url}
                    className="w-full rounded-md mb-2"
                    alt={post.slug}
                  />
                  <Link
                    to={"/post/" + post.slug}
                    className="text-lg font-semibold block mb-2"
                  >
                    {post.title}
                  </Link>
                  <p className="description">{post.description}</p>
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
