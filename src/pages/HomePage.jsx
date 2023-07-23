import '../styles/scss/main.scss'
import Navbar from '../components/Navbar'
import { Post } from '../components/Post'

const posts = [
  {
    postId: 1234,
    name: 'User1234',
    title: 'Title',
    content:
      'Eos excepturi ipsa aut. Quia tempora inventore sunt quo impedit. Nemo quia repellat nesciunt dolores ipsa consequatur eos.',
    time: '2 june 2022',
  },
  {
    postId: 1222,
    name: 'User1234',
    title: 'Title',
    content:
      'Eos excepturi ipsa aut. Quia tempora inventore sunt quo impedit. Nemo quia repellat nesciunt dolores ipsa consequatur eos.',
    time: '2 june 2022',
  },
]
function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="contents">
          {posts.map((post) => (
            <Post
              postId={post.postId}
              title={post.title}
              name={post.name}
              datetime={post.time}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default HomePage
