// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.body.addEventListener('click', function(e){
  if (e.target.matches(".like-glyph")) {
    mimicServerCall()
    .then(function(serverMessage) {
      if (e.target.textContent === EMPTY_HEART) {
        e.target.textContent = FULL_HEART
        e.target.style.color = "red"
      } else {
        e.target.textContent = EMPTY_HEART
        e.target.style.color = ""
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
