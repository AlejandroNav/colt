const form = document.querySelector("#shelterForm");
const ulCats = document.querySelector("#cats")
const input = document.querySelector("#catName")
form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(input.value);
    const newLi = document.createElement("LI")
    newLi.innerText = input.value
    console.log(newLi);
    ulCats.append(newLi)
});
input.addEventListener('change', function(e) {
    console.log(input);
})