function Post({ postId, title, name, dateTime }) {
  return (
    <article className="content" key={postId}>
      <h2>{title}</h2>
      <p>
        <span>{name}</span>|<span>dateTime</span>
      </p>
      <p>2 Comments</p>
    </article>
  )
}

export default Post
