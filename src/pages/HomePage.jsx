import '../styles/scss/main.scss'
import Navbar from '../components/Navbar'
import { Post } from '../components/Post'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

function HomePage(props) {
  const [posts, setPosts] = useState([])

  async function fetchPosts() {
    try {
      const res = await axios.get(`${apiUrl}/get/posts`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      // console.log(res.data)
      setPosts(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    props.auth
    fetchPosts()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <section className="contents">
          {posts.map((post) => (
            <Link to={`/post/${post.id}`} key={post.id}>
              <Post
                postId={post.id}
                title={post.title}
                name={post.username}
                dateTime={post.created_at}
                commentCount={post.comment_count}
              />
            </Link>
          ))}
        </section>
      </main>
    </>
  )
}

export default HomePage
