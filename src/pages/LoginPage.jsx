import '../styles/scss/main.scss'

function LoginPage() {
  return (
    <div className="containerCard">
      <div className="loginCard">
        <h2>Login</h2>
        <h3>Enter Your Credentials</h3>
        <form action="/" method="post">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <a href="/">Create new account</a>
          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
