import { ProxyState } from "../AppState.js"
import { postsService } from "../Services/PostsService.js"

function _drawPosts() {

}

export default class PostsController {
  constructor() {
    ProxyState.on("posts", _drawPosts)
    this.getPosts()
    _drawPosts()
  }
  getPosts() {

  }
  addPost() {

  }
  deletePost() {

  }
  votePost() {

  }
} 