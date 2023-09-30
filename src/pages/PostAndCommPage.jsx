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
  const [commentText, setCommentText] = useState('')
  const { postId } = useParams()

  const [showForm, setShowForm] = useState(true)

  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  async function handleSendComment() {
    try {
      if (commentText != '') {
        const response = await axios.post(
          `${apiUrl}/create/comment`,
          {
            postId: postId,
            content: commentText,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        getPostAndComments()

        setCommentText('')
      }
    } catch (error) {
      console.error(error)
    }
  }

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

              <AiFillCloseCircle
                className="icon"
                size={'1.3em'}
                onClick={() => setShowForm(false)}
              />
              <AiFillMessage
                className="icon"
                size={'1.3em'}
                onClick={() => setShowForm(true)}
              />
            </label>
          </div>
          {showForm && (
            <form className="inputContainer">
              <textarea
                name="icontent"
                id="icontent"
                rows="8"
                onChange={(e) => {
                  setCommentText(e.target.value)
                }}
              />
              <input type="button" value="Send" onClick={handleSendComment} />
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
