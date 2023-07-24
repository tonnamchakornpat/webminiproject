import '../styles/scss/main.scss'
import Navbar from '../components/Navbar'
import { Post } from '../components/Post'
import { Link } from 'react-router-dom'

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
            <Link to={`/post/:${post.postId}`}>
              <Post
                postId={post.postId}
                title={post.title}
                name={post.name}
                dateTime={post.time}
              />
            </Link>
          ))}
        </section>
      </main>
    </>
  )
}

export default HomePage
