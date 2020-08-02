const api = {
    key: "76435f8dfe6b4a52c859231b2ffd78ee
    ",
    baseurl: "https://api.openweathermap.org/data/2.5/",
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if (evt.keyCode == 13) {
        getResult(searchbox.value);
        console.log(searchbox.value);
    }
}

// function getResult (query) {
//     fetch('${api.base}weather')
// }