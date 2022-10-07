//Selectors
const searchButton = document.querySelector(".search-button");
const closeButton = document.querySelector(".close-button");
const inputSearch = document.querySelector(".input-search");
const searchWrap = document.querySelector(".search-wrap");

//Event Listeners
searchButton.addEventListener("click", function(){
    searchWrap.classList.add("active");
});
