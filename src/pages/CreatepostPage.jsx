import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/scss/main.scss'

const CreatepostPage = () => {
  return (
    <div>
        <Navbar/>
        <div className="createpostContainer">
        <form className="InputContainer">
          <h1>Create new post</h1>
          <textarea name="iheader" id="iheader" rows="1" placeholder='Topic'></textarea>
          <textarea name="icontent" id="icontent" rows="8" placeholder='Content'></textarea>
          <input type="button" value="Send" />
        </form>
        </div>
        
    </div>
  )
}

export default CreatepostPage