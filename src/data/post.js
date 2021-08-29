const POSTS_KEY = 'POSTS'
const COMMENTS_KEY = 'COMMENTS'

// CREATE POST
function createPosts(username, content, imgUrl) {
  const posts = getPosts() === null ? [] : getPosts()
  posts.push({
    id: posts.length + 1,
    author_id: username,
    content: content,
    content_img: imgUrl,
    comments: [],
  })

  localStorage.setItem(POSTS_KEY, JSON.stringify(posts))
}

// READ POSTS
function getPosts() {
  const data = localStorage.getItem(POSTS_KEY)

  return JSON.parse(data)
}

// UPDATE POST

// DELETE POST

// CREATE COMMENT
function createComment(username, comment, postId) {
  const comments = getComments() === null ? [] : getComments()
  comments.push({
    id: comments.length + 1,
    author_id: username,
    comment: comment,
  })

  localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments))

  const posts = getPosts()
  for (let i in posts) {
    if (posts[i].id === postId) {
      posts[i].comments.push(comments.length)
    }
  }

  localStorage.setItem(POSTS_KEY, JSON.stringify(posts))
}

// READ COMMENT
function getComments() {
  const data = localStorage.getItem(COMMENTS_KEY)

  return JSON.parse(data)
}

// UPDATE COMMENT

// DELETE COMMENT

export { createPosts, getPosts, createComment, getComments }
