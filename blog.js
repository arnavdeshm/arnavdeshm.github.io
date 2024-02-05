function increaseLikes(likeCountId) {
    const likeCountElement = document.getElementById(likeCountId);
    let currentLikes = parseInt(likeCountElement.innerText, 10) || 0;
    currentLikes++;
    likeCountElement.innerText = currentLikes;
    // Store the updated likes in local storage
    localStorage.setItem(likeCountId, currentLikes);
}

// Function to save comments to local storage
function saveComments(commentsId) {
    const commentsElement = document.getElementById(commentsId);
    const comments = commentsElement.value;
    // Store the comments in local storage
    localStorage.setItem(commentsId, comments);
}

// Retrieve and populate likes from local storage on page load
function populateLikes(likeCountId) {
    const likeCountElement = document.getElementById(likeCountId);
    const storedLikes = localStorage.getItem(likeCountId);
    if (storedLikes) {
        likeCountElement.innerText = storedLikes;
    }
}

// Retrieve and populate comments from local storage on page load
function populateComments(commentsId) {
    const commentsElement = document.getElementById(commentsId);
    const storedComments = localStorage.getItem(commentsId);
    if (storedComments) {
        commentsElement.value = storedComments;
    }
}

// Call functions to populate likes and comments on page load
populateLikes('likeCount1');
populateComments('comments1');
populateLikes('likeCount2');
populateComments('comments2');