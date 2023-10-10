import { useQuery } from "@apollo/client"
import { GET_POST } from "../constants/query"
import { Post } from "../types/post"
import { Link } from "react-router-dom"

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POST)

  if (loading) return <p>loading..</p>
  if (error) return <p>Couldn't get blog post</p>

  return (
    <main className="sm:py-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Latest Posts</h1>
        <p>
          Here are some post that I made, talking about frontend related stuff.
        </p>
      </section>

      <section className="post">
        <div className="grid sm:grid-cols-3 gap-4 py-4">
          {data.posts.map((post: Post) => (
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
  )
}

export default Posts
