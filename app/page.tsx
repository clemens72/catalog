import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        clemens' log
      </h1>
      <p className="mb-4">
        {`non-sequitur anthology\n
		tales of triumph and woe\n
		and all the colors within;`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
