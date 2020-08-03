const inputValue = document.querySelector("search-box");
const button = document.querySelector(".submit");

button.addEventListener("click",function(){
    fetch("api.openweathermap.org/data/2.5/weather?q="+ inputValue.value + "&appid=76435f8dfe6b4a52c859231b2ffd78ee")

    .then((response) => response.json())
    .then((response) => {
        console.log(response);
    });
})