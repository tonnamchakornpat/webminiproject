import { useState } from 'react'
import axios from 'axios'
import '../styles/scss/main.scss'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { AiFillLeftCircle } from 'react-icons/ai'
import { useEffect } from 'react'

const apiUrl = import.meta.env.VITE_API_URL

function LoginPage() {
  const [accNewStatus, setAccNewStatus] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const showRegisForm = () => {
    setErrMsg('')
    setAccNewStatus(!accNewStatus)
  }

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
      Swal.fire('Any fool can use a computer')
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrMsg('Unauthorized: กรุณาเข้าสู่ระบบใหม่')
      } else {
        console.error('Error:', error)
      }
    }
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault()

    let username = e.target.username.value
    let password = e.target.password.value
    let conPassword = e.target.conPassword.value

    if (password === conPassword) {
      const formData = {
        username: username,
        password: password,
      }

      try {
        const response = await axios.post(`${apiUrl}/create/user`, formData)
        console.log(response)
        Swal.fire('สมัครสมาชิคเรียบร้อย').then(() => {
          navigate(0)
        })
      } catch (error) {
        setErrMsg(error.message)
        console.log(error)
      }
    } else {
      setErrMsg('Password ไม่ตรงกัน')
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
        <form
          method="post"
          onSubmit={!accNewStatus ? handleSubmit : handleRegisterSubmit}
        >
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
          {errMsg ? <h4 style={{ color: 'red' }}>{errMsg}</h4> : null}
          {!accNewStatus && <p onClick={showRegisForm}>Create new account</p>}

          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
