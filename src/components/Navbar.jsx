import { GiHamburgerMenu } from 'react-icons/gi'
import { RiLogoutBoxRLine, RiFileList2Line, RiEdit2Line } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const apiUrl = import.meta.env.VITE_API_URL

function Navbar() {
  const [MenuStatus, setMenuStatus] = useState(false)
  const navigate = useNavigate()
  const changeStatus = () => {
    setMenuStatus(!MenuStatus)
  }
  const styleMenu = {
    opacity: '1',
    visibility: 'visible',
  }

  const logoutAlert = () =>
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#53D3D1',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .get(`${apiUrl}/user/logout`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              localStorage.removeItem('token')
              Swal.fire({
                text: 'You have been logged out',
                confirmButtonColor: '#53D3D1',
                confirmButtonText: 'ok',
              }).then(() => {
                navigate('/login')
              })
            }
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      }
    })

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>Hello</h1>
          </Link>
        </div>
        {
          <GiHamburgerMenu
            size={'1.5rem'}
            className="toggleBtn"
            onClick={changeStatus}
          />
        }
        <ul className="list" style={MenuStatus ? styleMenu : null}>
          <Link to="/my_posts">
            <li>My Post</li>
          </Link>
          <Link to="/create_post">
            <li>Create New</li>
          </Link>
          <Link onClick={logoutAlert}>
            <li>Logout</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
