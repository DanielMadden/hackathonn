export class Post {
  constructor(data) {
    this.author = data.author.name
    this.title = data.title
    this.body = data.body
    this.id = data.id
    this.rating = data.rating
  }
  get Template() {
    return `
    <div class="card p-3 container-fluid">

                    <span>Name</span>
                    <h3>Title</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores numquam error, eaque amet,
                        repudiandae obcaecati facilis tenetur deleniti cupiditate voluptas sequi eos. Delectus nisi
                        voluptate dolore suscipit odio repellat magnam!</span>
                    <div class="post-buttons mt-3">
                        <i class="fas fa-chevron-up button-upvote m-1"></i>
                        <i class="fas fa-chevron-down button-downvote m-1"></i>
                        <span class="amount-votes">100000</span>
                        <div class="comment-holder mr-3">
                            <span class="amount-comments">10</span>
                            <i class="fas fa-comment button-comment m-1"></i>
                        </div>
                    </div>

                </div>
    
    `
  }
}