const restaurants = document.querySelector('.restaurants')
fetch('http://localhost:4000')
  .then((response) => response.json())
  .then((data) => {
    let html = ''
    data.forEach(eachItem => {
      let htmlItem = `<div class="name-of-restaurants">
        <h2>${eachItem.name}</h2>
        <img src="${eachItem.photoUrl}">
        <p>Reting:${eachItem.reting}</p>
        <p>Address:${eachItem.address}</p>
        <p>Numratings:${eachItem.numRatings}</p>
        <p>Rating:${eachItem.rating}</p>
        <p>Ratings:${eachItem.ratings}</p>
        <p>Id:${eachItem.id}</p>
    </div>`
      html += htmlItem
    })
    restaurants.innerHTML = html
  })
  .catch((error) => console.error(error))
