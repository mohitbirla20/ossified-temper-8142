let clicked = JSON.parse(localStorage.getItem("clicked")) || [];
let disPlay = (data) => {
  let image = document.createElement("img");
  image.src =
    data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.smallThumbnail;
  document.querySelector("#image").append(image);
  let para = document.createElement("p");
  para.innerText = data.volumeInfo.description;
  document.querySelector("#dis").append(para);
  let price = document.querySelector("#price");
  let price1 = document.querySelector("#price1");
  price1.innerText = `Rs ${Math.ceil(Math.random() * 1000 + 600)}`;
  price.innerText = `Rs ${Math.ceil(Math.random() * 1000 + 350)}`;
  let title = document.querySelector("#Title");
  title.innerHTML = data.volumeInfo.title;
  let lang = document.querySelector("#lang");
  let pages = document.querySelector("#page");
  let auth = document.querySelector("#auth");
  let published = document.querySelector("#publish");
  let isbn1 = document.querySelector("#isbn1");
  let isbn2 = document.querySelector("#isbn2");
  if (data.volumeInfo.language === "en") {
    lang.innerHTML = "English";
  } else if (data.volumeInfo.language === "hi") {
    lang.innerHTML = "Hindi";
  } else {
    lang.innerHTML = data.volumeInfo.language;
  }
  pages.innerText = data.volumeInfo.pageCount;
  auth.innerText = data.volumeInfo.authors[0];
  published.innerText = data.volumeInfo.publisher;
  isbn1.innerText = data.volumeInfo.industryIdentifiers[1].identifier;
  isbn2.innerText = data.volumeInfo.industryIdentifiers[0].identifier;
  let button1 = document.querySelector("#button");
  let button2 = document.querySelector("#button1");
  button1.addEventListener("click", function () {
    Links(data);
  });

  button2.addEventListener("click", function () {
    Links(data);
  });
};
disPlay(clicked);

let Links = (data) => {
  window.location.href = data.volumeInfo.infoLink;
};

let booksData = () => {
  let url = `https://www.googleapis.com/books/v1/volumes?q=react:keyes&key=AIzaSyDHD1hm9NiOKQ6EneQq7S38QxdAn9M52Vc&maxResults=4`;

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
booksData();

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

let addtoCart = (elem) => {
  localStorage.setItem("clicked", JSON.stringify(elem));
  window.location.href = "books.html";
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
