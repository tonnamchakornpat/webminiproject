import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/scss/main.scss'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

const CreatepostPage = () => {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      title: e.target.iheader.value,
      content: e.target.icontent.value,
    }

    console.log(formData)

    try {
      const response = await axios.post(`${apiUrl}/create/post`, formData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      if (response) {
        Swal.fire(response.data.message).then(() => navigate('/my_posts'))
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div>
      <Navbar />
      <div className="createpostContainer">
        <form className="InputContainer" onSubmit={handleSubmit}>
          <h1>Create new post</h1>
          <textarea
            name="iheader"
            id="iheader"
            rows="1"
            placeholder="Topic"
          ></textarea>
          <textarea
            name="icontent"
            id="icontent"
            rows="8"
            placeholder="Content"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default CreatepostPage
