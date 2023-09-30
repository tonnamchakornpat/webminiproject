import dayjs from 'dayjs'

function Post({ postId, title, name, dateTime, commentCount }) {
  return (
    <article className="content" key={postId}>
      <h2>{title}</h2>
      <p>
        <span>{name}</span>|
        <span>{dayjs(dateTime).format('DD MMM YYYY - HH:mm')}</span>
      </p>
      <p>{commentCount} Comments</p>
    </article>
  )
}

function PostContent({ postId, title, name, content, dateTime }) {
  return (
    <article className="detailContainer" key={postId}>
      <h1>{title}</h1>

      <p className="content">{content}</p>
      <p>{name}</p>
      <p>{dayjs(dateTime).format('DD MMM YYYY - HH:mm')}</p>
    </article>
  )
}

export { Post, PostContent }
