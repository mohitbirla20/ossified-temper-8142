let search = JSON.parse(localStorage.getItem("query")) || [];
let query = localStorage.getItem("search");
document.querySelector("#results").innerHTML = `Search Results for ${query}`;
let displayData = (data) => {
  let container = document.querySelector("#container1");
  container.innerHTML = "";
  data.forEach((elem) => {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let image = document.createElement("img");
    image.src =
      elem.volumeInfo.imageLinks && elem.volumeInfo.imageLinks.smallThumbnail;
    h3.innerText = elem.volumeInfo.title;
    div.append(h3, image);
    container.append(div);
  });
};

displayData(search);

document.querySelector("#query").addEventListener("search", function () {
  SearchResult();
});

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
  localStorage.setItem("search", query);
};

let myfun = () => {
  let clicked = document.querySelector(".second");
  clicked.style.boxShadow = "0px 1px 10px 2px #6ebeec";
};

let searchResult = () => {
  if (event.keyCode === 13) {
    let query = document.querySelector("#Query").value;
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
    localStorage.setItem("search", query);
  }
};
