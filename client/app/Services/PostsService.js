import { ProxyState } from "../AppState.js"
import { api } from "../Services/AxiosService.js"
import { Post } from "../Models/Post.js"

class PostsService {
  async getPosts() {
    let res = await api.get('posts')
    console.log(res)
    ProxyState.posts = res.data.map(i => new Post(i))
    console.log(ProxyState.posts)
  }
  async addPost(newPost) {
    await api.post('posts', newPost)
    this.getPosts()
  }
  async deletePost(id) {
    await api.delete("posts" + id)
    this.getPosts()
  }
  async votePost(id, voteType) {
    let post = await api.get("posts/" + id)
    let voteData = { votes: `${post.votes}` }
    if (voteType) {
      voteData.votes++
    } else {
      voteData.votes--
    }
    await api.put("posts/" + id, voteData)
  }
}

export const postsService = new PostsService()