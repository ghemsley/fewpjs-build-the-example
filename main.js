// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likesArray = document.getElementsByClassName('like')
const errorModal = () => document.getElementById('modal')

const addListenerToLikesArray = () => {
  for (const like of likesArray) {
    like.addEventListener('click', (event) => {
      mimicServerCall()
        .then((response) => {
          console.log(response)
          event.target.classList.toggle('activated-heart')
          const heart = event.target.firstChild
          heart.textContent = heart.textContent != FULL_HEART ? FULL_HEART : EMPTY_HEART
        })
        .catch((error) => {
          console.error(error)
          errorModal().classList.toggle('hidden')
          errorModal().innerText = error
          setTimeout(() => {
            errorModal().classList.toggle('hidden')
          }, 5000)
        })
    })
  }
}

document.addEventListener('DOMContentLoaded', addListenerToLikesArray)

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
