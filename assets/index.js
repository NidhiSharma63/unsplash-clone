// console.log()
let imageContainer = document.querySelector(".imageContainer");
let imgShowed = document.querySelector(".imgShowed");
let container = document.querySelector(".container");
let crossIcon = document.querySelector(".crossIcon");
let downloadIcon = document.querySelector(".downloadIcon")
function loadImage() {
  (url =
    "https://api.unsplash.com/photos/?client_id=5OXcnxdQpZLtAG0_jRNpqEQhTlUOQL3TKviFAUbBKm8"),
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        data.forEach((element) => {
          let Div = document.createElement("Div");
          Div.setAttribute("class", "imgDiv");
          Div.setAttribute("data-downloadurl", `${element.links.download}`);
          let img = document.createElement("img");
          img.src = `${element.urls.regular}`;
          Div.appendChild(img);
          document.querySelector(".imageContainer").appendChild(Div);
          imagepopup()
        });
      });
}
window.onload = loadImage();


// function to fetch image
function getimage() {
  imageContainer.innerHTML = "";
  (url =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=1200&client_id=5OXcnxdQpZLtAG0_jRNpqEQhTlUOQL3TKviFAUbBKm8"),
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
    
        data.results.forEach((element) => {
          let Div = document.createElement("Div");
          Div.setAttribute("class", "imgDiv");
          Div.setAttribute("data-downloadurl", `${element.links.download}`);
          let img = document.createElement("img");
          img.src = `${element.urls.regular}`;
          Div.appendChild(img);
          document.querySelector(".imageContainer").appendChild(Div);
          imagepopup()
        });
      });
}
document.getElementById("btn").addEventListener("click", getimage);

// image popup function
function imagepopup(){
  let imgDiv = document.querySelectorAll(".imgDiv");
  imgDiv.forEach(element => {
    element.addEventListener("click",(e)=>{
      container.style.display="block"
      let target = e.currentTarget
      let clickedimagesrc = target.firstChild.src
      imgShowed.innerHTML=`<img src="${clickedimagesrc}" class="imgfit" alt="...">`
      downloadIcon.addEventListener("click",()=>{
        let url=target.dataset.downloadurl
        downloadIMG(url)
      })
    })
  });
}
// cross icon 
crossIcon.addEventListener("click",()=>{
  container.style.display="none"
});

function downloadIMG(){
  const link = document.createElement('a');
  link.style.display = 'none';
    link.href = URL.createObjectURL(url);
    link.download = file.name;
    link.click();
}