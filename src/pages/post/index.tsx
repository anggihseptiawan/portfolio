import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { GET_DETAIL_POST } from "../../constants/query"
import MarkDown from "react-markdown"
import rehypeHighlight from "rehype-highlight"

export default function Post() {
  const { slug } = useParams()
  if (!slug) return

  const { loading, error, data } = useQuery(GET_DETAIL_POST, {
    variables: { slug },
  })

  if (loading) return <p>loading..</p>
  if (error) return <p>Couldn't get blog detail</p>

  return (
    <main className="post sm:py-8">
      <h1 className="text-3xl text-center font-bold tracking-tight mb-4">
        {data.post.title}
      </h1>
      <img
        src={data.post.thumbnail.url}
        className="w-full sm:h-[450px] object-cover rounded-md mb-6"
        alt={data.post.slug}
      />
      <MarkDown className="content" rehypePlugins={[rehypeHighlight]}>
        {data.post.content.markdown.replaceAll("\\", "")}
      </MarkDown>
    </main>
  )
}
