let booksData = () => {
  let url = `https://www.googleapis.com/books/v1/volumes?q=gameofthrones:keyes&key=AIzaSyDHD1hm9NiOKQ6EneQq7S38QxdAn9M52Vc&maxResults=40`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      displayBooks(res.items);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.onload = booksData();

let displayBooks = (data) => {
  let container = document.querySelector("#container");
  container.innerHTML = "";
  data.forEach((elem) => {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let image = document.createElement("img");
    image.src =
      elem.volumeInfo.imageLinks && elem.volumeInfo.imageLinks.smallThumbnail;
    h3.innerText = elem.volumeInfo.title;
    p.innerText = `${Math.ceil(Math.random() * 1000 + 400)}.0`;
    let div1 = document.createElement("div");
    let icon1 = document.createElement("img");
    let icon2 = document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p1.innerText = "View Now";
    p2.innerText = "More Details";
    icon1.src = "shopping-cart.png";
    icon2.src = "list.png";
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    image.addEventListener("click", function () {
      addtoCart(elem);
    });
    p1.addEventListener("click", function () {
      addtoCart(elem);
    });
    p2.addEventListener("click", function () {
      addtoCart(elem);
    });
    div2.append(icon1, p1);
    div3.append(icon2, p2);
    div1.append(div2, div3);
    div.append(image, h3, p, div1);
    container.append(div);
  });
};

let SearchResult = () => {
  let query = document.querySelector("#query").value;
  let url = `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=AIzaSyDHD1hm9NiOKQ6EneQq7S38QxdAn9M52Vc&maxResults=40`;

  if (query.length > 0) {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        localStorage.setItem("query", JSON.stringify(res.items));
        window.location.href = "search.html";
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

let addtoCart = (elem) => {
  localStorage.setItem("clicked", JSON.stringify(elem));
  window.location.href = "books.html";
};
