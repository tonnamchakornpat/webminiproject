import { GiHamburgerMenu } from 'react-icons/gi'
import { RiLogoutBoxRLine, RiFileList2Line, RiEdit2Line } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

function Navbar() {
  const [MenuStatus, setMenuStatus] = useState(false)
  const changeStatus = () => {
    setMenuStatus(!MenuStatus)
  }

  return (
    <div className="Navbar">
      <div className="NavbarContainer">
        <div className="itemsContainer">
          <nav>
            <h1>Header</h1>
            {MenuStatus ? (
              <AiOutlineClose size={'1.5rem'} onClick={changeStatus} />
            ) : (
              <GiHamburgerMenu size={'1.5rem'} onClick={changeStatus} />
            )}
          </nav>
        </div>
      </div>

      <ul
        style={
          !MenuStatus
            ? { position: 'relative', left: '200vw' }
            : { position: 'relative' }
        }
      >
        <li>
          <RiFileList2Line className="iconMenu" />
          <p>My Post</p>
        </li>
        <li>
          <RiEdit2Line className="iconMenu" />
          <p>Write</p>
        </li>
        <li>
          <RiLogoutBoxRLine className="iconMenu" />
          <p>Logout</p>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
