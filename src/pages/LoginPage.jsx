import { useState } from 'react'
import axios from 'axios'
import '../styles/scss/main.scss'
import { useNavigate } from 'react-router-dom'
import { AiFillLeftCircle } from 'react-icons/ai'
import { useEffect } from 'react'

const apiUrl = import.meta.env.VITE_API_URL

function LoginPage() {
  const [accNewStatus, setAccNewStatus] = useState(false)
  const showRegisForm = () => setAccNewStatus(!accNewStatus)

  const navigate = useNavigate()

  const backIconStyle = {
    marginBottom: accNewStatus && '5px',
    position: 'relative',
    right: accNewStatus ? '0px' : '-400px',
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      username: e.target.username.value,
      password: e.target.password.value,
    }

    try {
      const response = await axios.post(`${apiUrl}/user/login`, formData)
      localStorage.setItem('token', response.data.token)
      console.log(response)
      navigate('/')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/')
    }
  }, [])

  return (
    <div className="containerCard">
      <div className="loginCard">
        <AiFillLeftCircle
          id="backIcon"
          size={35}
          style={backIconStyle}
          onClick={showRegisForm}
        />

        <h2> {accNewStatus ? 'Create New Account' : 'Login'}</h2>
        {!accNewStatus && <h3> Enter Your Credentials</h3>}
        <form method="post" onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input
            autoComplete="off"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            autoComplete="off"
            type="password"
            name="conPassword"
            id="conPassword"
            placeholder="Confirm Password"
            style={{
              display: accNewStatus ? 'block' : 'none',
              position: accNewStatus ? '-10px' : '0px',
              marginBottom: '6px',
            }}
          />
          {!accNewStatus && <p onClick={showRegisForm}>Create new account</p>}

          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
