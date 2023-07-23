import { PostContent } from '../components/Post'
import Navbar from '../components/Navbar'
import Comment from '../components/Comment'
import { AiFillMessage, AiFillCloseCircle } from 'react-icons/ai'
import '../styles/scss/main.scss'
import { useState } from 'react'

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
  const [showForm, setShowForm] = useState(false)
  return (
    <section className="contentsContainer">
      <PostContent
        postId={123}
        title={'title'}
        name={'Chakornpat'}
        content={
          'odit unde illumRem in laudantium eveniet.Inventore vitae voluptas nesciunt laboriosam totam aut. Quia ut quae mollitia aut.'
        }
        dateTime={'02-06-2022'}
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

      <Comment
        name={'Chakornpat'}
        dateTime={'02 jun 2002'}
        content={
          'A quo porro. Iure sed ut. Omnis vel quia cumque. Asperiores porro nostrum fuga temporibus voluptatibus deleniti quidem vel debitis. Quidem delectus est est debitis et. Ut quo qui expedita debitis rerum voluptatem vitae quo laboriosam.'
        }
      />
    </section>
  )
}
