import React from 'react'
import '../styles/scss/main.scss'

function Comment({ name, dateTime, content }) {
  return (
    <article className="commentContainer">
      <h2>
        <span>{name}</span>
        <span>{dateTime}</span>
      </h2>
      <p>{content}</p>
    </article>
  )
}

export default Comment
