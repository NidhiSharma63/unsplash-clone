// console.log()
const imageContainer = document.querySelector(".imageContainer");
const imgShowed = document.querySelector(".imgShowed");
const container = document.querySelector(".container");
const crossIcon = document.querySelector(".crossIcon");
const downloadIcon = document.querySelector(".downloadIcon");
const logo = document.querySelector(".logo");

//load home image
function loadImage() {
  url =
    "https://api.unsplash.com/photos/?client_id=5OXcnxdQpZLtAG0_jRNpqEQhTlUOQL3TKviFAUbBKm8";
  fetchHomeImage(url);
}

// function to fetch show search image
function getimage() {
  imageContainer.innerHTML = "";
  url =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=1200&client_id=5OXcnxdQpZLtAG0_jRNpqEQhTlUOQL3TKviFAUbBKm8";
  fetchSearchImage(url);

}
// function fetch image data
function fetchSearchImage(URL) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.results.forEach((element) => {
        let Div = document.createElement("Div");
        Div.setAttribute("class", "imgDiv");
        Div.setAttribute("data-downloadurl", `${element.links.download}`);
        let img = document.createElement("img");
        img.src = `${element.urls.regular}`;
        Div.appendChild(img);
        document.querySelector(".imageContainer").appendChild(Div);
        imagepopup();
        downloadIcon.addEventListener("click", () => {
          window.open(`${element.links.download}`, '_blank')
        })
      });
    });

}

// function fetch home page image
function fetchHomeImage(URL) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((element) => {
        let Div = document.createElement("Div");
        Div.setAttribute("class", "imgDiv");
        Div.setAttribute("data-downloadurl", `${element.links.download}`);
        let img = document.createElement("img");
        img.src = `${element.urls.regular}`;
        Div.appendChild(img);
        document.querySelector(".imageContainer").appendChild(Div);
        imagepopup();
        downloadIcon.addEventListener("click", () => {
          window.open(`${element.links.download}`, '_blank')
        })
      });
    });
}
// image popup function
function imagepopup() {
  let imgDiv = document.querySelectorAll(".imgDiv");
  imgDiv.forEach((element) => {
    element.addEventListener("click", (e) => {
      container.style.display = "block";
      let target = e.currentTarget;
      let clickedimagesrc = target.firstChild.src;
      imgShowed.innerHTML = `<img src="${clickedimagesrc}" class="imgfit" alt="...">`;
    });
  });
}

window.onload = loadImage();

// show home page on click logo
logo.addEventListener("click", () => {
  input.value = "";
  imageContainer.innerHTML = "";
  loadImage();
});

document.getElementById("btn").addEventListener("click", getimage);

// cross icon
crossIcon.addEventListener("click", () => {
  container.style.display = "none";
});
