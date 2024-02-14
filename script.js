const container = document.getElementById("container")
const button = document.getElementById("button")

const url= "https://dummyjson.com/products"
/*const getData = async () => {
  const response = await fetch(url,{method:'GET'})
  if (response.ok) {
    const data = await response.json();
    const last= data.products
    console.log(last)
    let data_container = last.map(each => {
        return (
            `<div class="card-container">
        <h1> ${each.brand}-${each.title}</h1>
        <img src=${each.images[0]} alt=${each.title}/>
        <p class="description">${each.description}</p>
        <div class="rating-container">
          <div class="star-container">
            <i class="fa-solid fa-star"></i>
            <p class="rating">${each.rating}</p>
          </div>
          <p class="price">Rs. ${each.price}.00</p>
        </div>
    </div>`
        )
    })
    container.innerHTML = data_container
  }
  else{
    console.log("err")
  }
}
getData();*/

function run() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET",url,true);
  xhr.onreadystatechange = function () {
    if (this.readyState ==4 && this.status==200) {
    let data = JSON.parse(this.responseText)
    let data_container = data.products.map(each => {
        return (
            `<div class="card-container">
        <h1> ${each.brand}-${each.title}</h1>
        <img src=${each.images[0]} alt=${each.title}/>
        <p class="description">${each.description}</p>
        <div class="rating-container">
          <div class="star-container">
            <i class="fa-solid fa-star"></i>
            <p class="rating">${each.rating}</p>
          </div>
          <p class="price">Rs. ${each.price}.00</p>
        </div>
    </div>`
        )
    })
    container.innerHTML = data_container
    }
  }
  xhr.send();
}

run()
