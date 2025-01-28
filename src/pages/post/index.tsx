import { useLoaderData } from "react-router-dom"
import MarkDown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import { useEffect, useState } from "react"
import { PostDetailLoaderData } from "../../types/post"
import { createHighlighterCore } from "shiki/core"
import { createOnigurumaEngine } from "shiki/engine/oniguruma"
import tokyo from "@shikijs/themes/tokyo-night"

const CodeBlock = ({ ...props }) => {
  const [html, setHtml] = useState("")

  async function generateCode(code: string) {
    if (code.length < 15) return code

    const highlighter = await createHighlighterCore({
      themes: [tokyo],
      langs: [import("@shikijs/langs/javascript")],
      engine: createOnigurumaEngine(import("shiki/wasm")),
    })

    const html = highlighter.codeToHtml(code, {
      lang: "javascript",
      theme: "tokyo-night",
    })
    return html
  }

  useEffect(() => {
    generateCode(props.children).then((result) => setHtml(result))
  }, [props.children])

  return <code dangerouslySetInnerHTML={{ __html: html }} />
}

export default function Post() {
  const [locale, setLocale] = useState<"id" | "en">("id")
  const { data, error } = useLoaderData() as {
    data: PostDetailLoaderData
    error: boolean
  }

  const post = data.post.localizations.find((post) => post.locale === locale)

  if (error) return <p>Couldn't get blog detail</p>

  return (
    <main className="prose mx-auto py-8 min-h-screen prose-lg prose-pre:my-0 prose-pre:text-base prose-code:!bg-transparent prose-a:text-emerald-500 dark:prose-code:text-white dark:prose-h1:text-white dark:prose-h3:text-white dark:prose-p:text-white dark:prose-a:text-emerald-300 dark:prose-a:underline">
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
          code: CodeBlock,
        }}
      >
        {post?.content.markdown.replaceAll("\\", "")}
      </MarkDown>
    </main>
  )
}
