import { GiHamburgerMenu } from 'react-icons/gi'
import { RiLogoutBoxRLine, RiFileList2Line, RiEdit2Line } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [MenuStatus, setMenuStatus] = useState(false)
  const changeStatus = () => {
    setMenuStatus(!MenuStatus)
  }
  const styleMenu = {
    opacity: '1',
    visibility: 'visible',
  }

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
          <Link to="#">
            <li>Logout</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
