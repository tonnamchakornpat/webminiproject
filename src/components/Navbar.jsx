import { GiHamburgerMenu } from 'react-icons/gi'
import { RiLogoutBoxRLine, RiFileList2Line, RiEdit2Line } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

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
          <h1>Hello</h1>
        </div>
        {
          <GiHamburgerMenu
            size={'1.5rem'}
            className="toggleBtn"
            onClick={changeStatus}
          />
        }
        <ul className="list" style={MenuStatus ? styleMenu : null}>
          <a href="#">
            <li>My Post</li>
          </a>
          <a href="#">
            <li>Create New</li>
          </a>
          <a href="#">
            <li>Logout</li>
          </a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
