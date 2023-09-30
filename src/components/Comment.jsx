import React from 'react'
import '../styles/scss/main.scss'
import dayjs from 'dayjs'

function Comment({ name, dateTime, content }) {
  return (
    <article className="commentContainer">
      <h2>
        <span>{name}</span>
        <span>{dayjs(dateTime).format('DD MMM YYYY - HH:mm')}</span>
      </h2>
      <p>{content}</p>
    </article>
  )
}

export default Comment
