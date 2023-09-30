import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2' // Import SweetAlert2 if you are using it.
import Navbar from '../components/Navbar'

const apiUrl = import.meta.env.VITE_API_URL

function EditPostPage() {
  const navigate = useNavigate()
  const { postId } = useParams()
  const [post, setPost] = useState({ title: '', content: '' }) // Initialize with empty values

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      title: e.target.iheader.value,
      content: e.target.icontent.value,
    }

    try {
      const response = await axios.put(
        `${apiUrl}/update/post/${postId}`,
        formData,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      if (response.status === 200) {
        Swal.fire({
          text: response.data.message,
          confirmButtonColor: '#53D3D1',
        }).then(() => navigate('/my_posts'))
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    async function getPost() {
      try {
        const res = await axios.get(`${apiUrl}/get/post/${postId}`)
        if (res.data && res.data.length > 0) {
          setPost(res.data[0])
        }
      } catch (error) {
        console.error(error)
      }
    }

    getPost()
  }, [postId]) // Add postId to the dependency array to re-fetch when it changes.

  return (
    <div>
      <Navbar />
      {post && (
        <div className="createpostContainer">
          <form className="InputContainer" onSubmit={handleSubmit}>
            <h1>Edit Post</h1>
            <textarea
              name="iheader"
              id="iheader"
              rows="1"
              placeholder="Topic"
              defaultValue={post.title} // Use defaultValue to set initial textarea value
            />
            <textarea
              name="icontent"
              id="icontent"
              rows="8"
              placeholder="Content"
              defaultValue={post.content} // Use defaultValue to set initial textarea value
            />
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default EditPostPage
