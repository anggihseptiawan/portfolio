import { useLoaderData } from "react-router-dom"
import MarkDown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import { useState } from "react"
import { PostDetailLoaderData } from "../../types/post"

export default function Post() {
  const [locale, setLocale] = useState<"id" | "en">("id")
  const { data, error } = useLoaderData() as {
    data: PostDetailLoaderData
    error: boolean
  }

  const post = data.post.localizations.find((post) => post.locale === locale)

  if (error) return <p>Couldn't get blog detail</p>

  return (
    <main className="prose mx-auto py-8 min-h-screen prose-lg prose-code:!bg-transparent prose-a:text-emerald-500 dark:prose-h1:text-white dark:prose-h3:text-white dark:prose-p:text-white dark:prose-a:text-emerald-300 dark:prose-a:underline">
      <h1 className="text-2xl md:text-3xl text-center font-bold tracking-tight mb-4">
        {post?.title}
      </h1>
      <img
        src={post?.thumbnail.url}
        className="w-full sm:h-[450px] object-cover rounded-md mb-6"
        alt={data.post?.slug}
      />
      <button
        className="py-3 px-4 text-sm rounded-md bg-emerald-600 hover:bg-emerald-500 text-white"
        onClick={() => setLocale((prev) => (prev === "id" ? "en" : "id"))}
      >
        {locale === "id"
          ? "Baca dalam Bahasa Inggris"
          : "Read in Bahasa Indonesia"}
      </button>
      <MarkDown
        className="content"
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
          iframe: ({ ...props }) => <video src={props.src} controls></video>,
        }}
      >
        {post?.content.markdown.replaceAll("\\", "")}
      </MarkDown>
    </main>
  )
}
