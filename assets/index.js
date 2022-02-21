
function getimage() {
    url = 'https://api.unsplash.com/search/photos?query=' + input.value + '&per_page=130&client_id=5OXcnxdQpZLtAG0_jRNpqEQhTlUOQL3TKviFAUbBKm8',
        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            data.results.forEach(element => {
                let srorce = element.urls.regular
                console.log(srorce)
                let Div = document.createElement("Div");
                Div.setAttribute("class", "imgDiv");
                let img = document.createElement("img");
                img.src = `${element.urls.regular}`
                Div.appendChild(img);
                document.querySelector(".imageContainer").appendChild(Div)
            });
        })
}
document.getElementById("btn").addEventListener("click",getimage)