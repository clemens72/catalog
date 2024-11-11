import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        clemens' log
      </h1>
      <p className="mb-4 whitespace-pre-line">
        {`non-sequitur anthology
		triumph united with woe
		and polychrome betwixt;`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
