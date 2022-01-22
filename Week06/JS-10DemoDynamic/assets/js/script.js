var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (let i = 0; i < data.length; i++) {
        let loginName = document.createElement('h2');
        let url = document.createElement('p');

        loginName.textContent = data[i].login;
        url.textContent = data[i].url;

        userContainer.append(loginName);
        userContainer.append(url);
      }
    });
}
fetchButton.addEventListener('click', getApi);
