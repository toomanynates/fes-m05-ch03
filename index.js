// APIs:

// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

function renderPosts(id) {
    // store id to local storage
    sessionStorage.setItem("userId", id);

    window.location.href = `${window.location.origin}/user.html`;
}

function renderCards(users) {
    /* make a loop that renders each user card like this:
        <div class="user-card">
        <div class="user-card__container">
            <h3>User's Name</h3>
            <p><b>Email:</b> email@email.com</p>
            <p><b>Phone:</b> 0000000000</p>
            <p><b>Website: </b> <a href="https://website.website" target="_blank">website.website</a></p>
        </div>
        </div>
    */
    let usersHtml = "";
    for (const user of users) {
        usersHtml += `
        <div class="user-card" onclick="renderPosts(${user.id})">
            <div class="user-card__container">
                <h3>${user.name}</h3>
                <p><b>Email:</b> ${user.email}</p>
                <p><b>Phone:</b> ${user.phone}</p>
                <p><b>Website: </b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
            </div>
        </div>
        `;
    }
    document.querySelector(".user-cards").innerHTML = usersHtml;
}

async function main() {   
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await users.json();

    console.log(usersData[0]);

    renderCards(usersData);
}

main();
