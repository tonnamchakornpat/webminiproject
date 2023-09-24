import { PostContent } from '../components/Post'
import Navbar from '../components/Navbar'
import Comment from '../components/Comment'
import { AiFillMessage, AiFillCloseCircle } from 'react-icons/ai'
import '../styles/scss/main.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const apiUrl = import.meta.env.VITE_API_URL

const PostAndCommPage = () => {
  return (
    <>
      <Navbar />
      <Contents />
    </>
  )
}

export default PostAndCommPage

function Contents() {
  const { postId } = useParams()

  const [showForm, setShowForm] = useState(true)

  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  async function getPostAndComments() {
    try {
      const res = await axios.get(`${apiUrl}/get/post/${postId}`)
      setPost(res?.data[0])
      if (res?.data[0]) {
        const resComments = await axios.get(`${apiUrl}/get/comments/${postId}`)
        setComments(resComments?.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPostAndComments()
  }, [])

  return (
    <section className="contentsContainer">
      {post && (
        <>
          <PostContent
            postId={post.id}
            title={post.title}
            name={post.username}
            content={post.content}
            dateTime={post.created_at}
          />
          <hr />
          <div className="comment">
            <h2>COMMENTS</h2>
            <label for="Comment">
              <input type="checkbox" name="Comment" id="Comment" />
              <AiFillMessage
                className="icon"
                size={'1.3em'}
                onClick={() => setShowForm(true)}
              />
              <AiFillCloseCircle
                className="icon"
                size={'1.3em'}
                onClick={() => setShowForm(false)}
              />
            </label>
          </div>
          {showForm && (
            <form className="inputContainer">
              <textarea name="icontent" id="icontent" rows="8"></textarea>
              <input type="button" value="Send" />
            </form>
          )}
          {comments.map((comment) => (
            <Comment
              name={comment.username}
              dateTime={comment.created_at}
              content={comment.content}
            />
          ))}
        </>
      )}
    </section>
  )
}
