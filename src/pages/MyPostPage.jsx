import Navbar from '../components/Navbar'
import { PostContent } from '../components/Post'

import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/scss/main.scss'

const apiUrl = import.meta.env.VITE_API_URL

function MyPostPage() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  const handleDeleteSubmit = async (postId) => {
    Swal.fire({
      title: 'Delete Posts',
      text: 'Are you sure you want to delete',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#53D3D1',
      confirmButtonText: 'Delete',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${apiUrl}/delete/post/${postId}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              Swal.fire({
                text: 'Delete Successfully',
                confirmButtonColor: '#53D3D1',
                confirmButtonText: 'ok',
              }).then(() => {
                navigate(0)
              })
            }
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      }
    })
  }

  useEffect(() => {
    async function fetchMyPost() {
      try {
        const res = await axios.get(`${apiUrl}/get/myPosts`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        setPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMyPost()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <section className="mypostsContainer">
          {posts?.map((post) => (
            <div className="mypostContainer" key={post.id}>
              <PostContent
                postId={post.id}
                title={post.title}
                content={post.content}
                dateTime={post.created_at}
              />
              <div className="buttonContainer">
                <input
                  type="button"
                  value="Edit"
                  onClick={() => navigate(`/my_posts/edit/${post.id}`)}
                />
                <input
                  type="button"
                  value="Delete"
                  onClick={() => handleDeleteSubmit(post.id)}
                />
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  )
}

export default MyPostPage
