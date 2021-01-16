import { ProxyState } from "../AppState.js"
import { api } from "../Services/AxiosService.js"
import { Comment } from "../Models/Comment.js"

class CommentsService {
  async getComments() {
    let res = await api.get("comments")
    console.log(res.data)
    ProxyState.comments = res.data.map(i => new Comment(i))
    console.log(ProxyState.comments)
  }
  async addComment(newComment) {
    await api.post('comments', newComment)
    this.getComments()
  }
  async deleteComment(id) {
    await api.delete("comments" + id)
    this.getComments()
  }
  async voteComment(id) {
    let comment = await api.get("comments/" + id)
    let voteData = { votes: `${comment.votes}` }
    if (voteType) {
      voteData.votes++
    } else {
      voteData.votes--
    }
    await api.put("comments/" + id, voteData)
  }
}

export const commentsService = new CommentsService()