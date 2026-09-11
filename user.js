
let userId = sessionStorage.getItem("userId");
const postList = document.querySelector(".post-list");
const searchInput = document.querySelector(".post__search--input");

searchInput.value = userId ?? ""; // Use fallback only when value is null or undefined.

function onSearchChange(event)
{
    const searchValue = event.target.value;
    console.log("onSearchChange() user.js - searchValue:", searchValue);
    userId = searchValue;
    getPosts(userId);
}

// render the posts using the array map function. getItemById post-list and then render this:
function renderPosts(posts) {
    const postsHtml = posts.map(post => `
        <div class="post">
          <div class="post__title">
            ${post.title}
          </div>
          <p class="post__body">
            ${post.body}
          </p>
        </div>
      `).join('');
    postList.innerHTML = postsHtml;
}

// inspect session storage for id and console log it to make sure it is being stored correctly
async function getPosts(userId) {
    console.log("main() user.js - userId:", userId);

    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const postsData = await posts.json();   

    console.log(postsData);
    renderPosts(postsData);
}

getPosts(userId);