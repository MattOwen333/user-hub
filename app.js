// this is a comment
const BASE_URL = "https://jsonplace-univclone.herokuapp.com";

function fetchUsers() {
  return fetchData(`${BASE_URL}/users`);
}

function renderUser(user) {
  const make = $(`<div class="user-card">
  <header>
    <h2>${user.name}</h2>
  </header>
  <section class="company-info">
    <p><b>Contact:</b> ${user.email}</p>
    <p><b>Works for:</b> ${user.company.name}</p>
    <p><b>Company creed:</b> ${user.company.catchPhrase}</p>
  </section>
  <footer>
    <button class="load-posts">POSTS BY Bret</button>
    <button class="load-albums">ALBUMS BY Bret</button>
  </footer>
</div>`);
  make.data("user", user);
  return make;
}

function renderUserList(userList) {
  $("#user-list").empty();
  userList.forEach(user => $("#user-list").append(renderUser(user)));
}

function renderCardList(cardList) {
  $("#results").empty();

  cardList.forEach(function(card) {
    $("#results").append(renderCard(card));
  });
}

function bootstrap() {
  fetchUsers().then(renderUserList);
}

bootstrap();

$("#user-list").on("click", ".user-card .load-posts", function() {
  const getUser = $(this)
    .closest(".user-card")
    .data("user");

  // load posts for this user
  // render posts for this user
});

$("#user-list").on("click", ".user-card .load-albums", function() {
  const getAlbum = $(this)
    .closest(".user-card")
    .data("user");
});

/* get an album list, or an array of albums */
function fetchUserAlbumList(userId) {
  return fetchData(`${BASE_URL}/users/${userId}/albums`);
}
/* render a single album */
function renderAlbum(album) {}

/* render a single photo */
function renderPhoto(photo) {}

/* render an array of albums */
function renderAlbumList(albumList) {}
