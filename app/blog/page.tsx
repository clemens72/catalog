import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'log',
  description: 'clemens\' log',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">clemens' log</h1>
      <BlogPosts />
    </section>
  )
}
