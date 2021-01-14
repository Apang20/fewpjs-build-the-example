// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.body.addEventListener('click', function(event){
  if (event.target.matches(".like-glyph")) {
    mimicServerCall()
    .then(function(serverMessage) {
      if (event.target.textContent === EMPTY_HEART) {
        event.target.textContent = FULL_HEART
        event.target.style.color = "red"
      } else {
        event.target.textContent = EMPTY_HEART
        event.target.style.color = ""
      }
    })
    .catch(function(error) {
      document.getElementById("modal").className = "";
    })
  }
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
