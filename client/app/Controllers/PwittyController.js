let showComments = false
function _toggleCommentColumn() {
  if (showComments) {
    document.getElementById("add-comment-box").classList.remove("hidden")
    showComments = true
  } else {
    document.getElementById("add-comment-box").classList.add("hidden")
    showComments = false
  }

}

let r = document.querySelector(":root")

export default class PwittyController {
  constructor() {

  }

  showComments() {
    r.style.setProperty("--comments-right", "0%");
    r.style.setProperty("--posts-width", "60%")
  }

  hideComments() {
    r.style.setProperty("--comments-right", "-50%");
    r.style.setProperty("--posts-width", "100%")
  }
}