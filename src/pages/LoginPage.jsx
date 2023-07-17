import { useState } from 'react'
import '../styles/scss/main.scss'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function LoginPage() {
  const [accNewStatus, setAccNewStatus] = useState(false)
  const showRegisForm = () => setAccNewStatus(!accNewStatus)

  return (
    <div className="containerCard">
      <div className="loginCard">
        {accNewStatus && (
          <AiOutlineArrowLeft
            id="backIcon"
            size={30}
            style={{
              marginBottom: '10px',
              position: 'relative',
            }}
            onClick={showRegisForm}
          />
        )}
        <h2> {accNewStatus ? 'Create New Account' : 'Login'}</h2>
        <h3>Enter Your Credentials</h3>
        <form action="/" method="post">
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
