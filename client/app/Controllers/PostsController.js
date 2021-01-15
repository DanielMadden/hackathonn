import { ProxyState } from "../AppState.js"
import { postsService } from "../Services/PostsService.js"

function _drawPosts() {
  let posts = ProxyState.posts
  let template = ''
  posts.forEach(post => {
    template += post.Template
  })
}

export default class PostsController {
  constructor() {
    ProxyState.on("posts", _drawPosts)
    this.getPosts()
    _drawPosts()
  }
  getPosts() {
    try {
      postsService.getPosts()
    } catch (error) {
      console.error(error)
    }
  }
  addPost() {
    window.event.preventDefault()
    let form = window.event.target()
    let newPost = {
      title: form['title'].value,
      body: form['body'].value
    }
    try {
      postsService.addPost(post)
    } catch (error) {
      console.error(error)
    }
  }
  deletePost(id) {
    try {
      postsService.deletePost(id)
    } catch (error) {
      console.error(error)
    }
  }
  votePost(id) {
    try {
      postsService.votePost(id)
    } catch (error) {
      console.error(error)
    }
  }
} 