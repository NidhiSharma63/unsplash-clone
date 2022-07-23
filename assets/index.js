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
    "https://api.unsplash.com/photos/random?client_id=5OXcnxdQpZLtAG0_jRNpqEQhTlUOQL3TKviFAUbBKm8&count=30";
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

// function to get image from url
function getImage(imgTag,Image) {
  if(window.innerWidth<=500){
    imgTag.src = `${Image.urls.thumb}`;
  }else{
    imgTag.src = `${Image.urls.regular}`;
  }
};

// function fetch image datad 
function fetchSearchImage(URL) {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.results.forEach((element) => {
        let img = document.createElement("img");
        img.className="image-gallery";

        // addinglistener to window resize to change image size;

        window.addEventListener("resize", () => {
          getImage(img,element);
        });

        getImage(img,element);
        document.querySelector(".imageContainer").appendChild(img);
        imagepopup();
      });
    });

}

// function fetch home page image
function fetchHomeImage(URL) {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((element) => {
        console.log(element);
        let img = document.createElement("img");
        img.className="image-gallery";

        // addinglistener to window resize to change image size;

        window.addEventListener("resize", () => {
          getImage(img,element);
        });
        
        getImage(img,element);
        
        document.querySelector(".imageContainer").appendChild(img);
        imagepopup();
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
