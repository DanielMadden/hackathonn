export class Comment {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.votes = data.votes
    console.log(data.postId)
    this.postId = data.postId
    console.log(this.postId)
    this.name = data.name
  }
  get Template() {
    return /*html*/`
    <div class="card p-3 container-fluid" id="${this.postId}" >
                    <span class="author comment-author">${this.name}</span>
                    <span class="comment-body">${this.body}</span>
                    <div class="post-buttons mt-3">
                        <i class="fas fa-chevron-up button-upvote m-1"></i>
                        <i class="fas fa-chevron-down button-downvote m-1"></i>
                        <span class="amount-votes">${this.votes}</span>
                    </div>
                </div>
    
    `
  }
}