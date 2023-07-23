function Post({ postId, title, name, dateTime }) {
  return (
    <article className="content" key={postId}>
      <h2>{title}</h2>
      <p>
        <span>{name}</span>|<span>{dateTime}</span>
      </p>
      <p>2 Comments</p>
    </article>
  )
}

function PostContent({ postId, title, name, content, dateTime }) {
  return (
    <article className="detailContainer" key={postId}>
      <h1>{title}</h1>

      <p className="content">{content}</p>
      <p>{name}</p>
      <p>{dateTime}</p>
    </article>
  )
}

export { Post, PostContent }
