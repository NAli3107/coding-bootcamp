
const fetchButton = document.getElementById('button')

function getApi(event) {
    event.preventDefault()

    let url = 'https://www.loc.gov/search/?q=baseball&fo=json'
    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        console.log(data.results[0])
    })
}

fetchButton.addEventListener("click", getApi)