import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function RequireAuth({ children }) {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      navigate('/login', { replace: false })
    }
  }, [navigate])

  return children
}

export default RequireAuth
