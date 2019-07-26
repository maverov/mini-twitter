// Variables
const tweetList = document.getElementById("tweet-list")

// Event Listeners
eventListeners();

document.getElementById("tweet-list").addEventListener("click", removeTodo);

// Functions
function eventListeners() {
    // Form submission listener
    document.getElementById("form").addEventListener("submit", newTweet)
}

function newTweet(e) {
    e.preventDefault();

    // Read user input from text area
    const tweet = document.getElementById("tweet").value;

    // Create remove button
    const removeBtn = document.createElement("a");
    removeBtn.classList = "remove-tweet";
    removeBtn.textContent = "X";

    // Create li element
    const li = document.createElement("li");
    li.textContent = tweet;

    li.appendChild(removeBtn);
    tweetList.appendChild(li);

}

function removeTodo(e) {
    if (e.target.className == "remove-tweet") {
        e.target.parentNode.remove();
    }
}