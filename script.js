const checkbox = document.getElementById("divStyle");
const textfields = document.querySelectorAll(".textfield");
const button = document.querySelector("button");
const div = document.querySelector("#div")

function hanteraInput(e) {
  console.log(e.target);
  const namn = e.target.name;

  if (namn === "content") {
    div.innerHTML = e.target.value;    
  }
}

textfields.forEach(field => field.addEventListener("input", hanteraInput));

checkbox.addEventListener("change", function () {

  const färg = document.querySelector('input[name="color"]').value;

  div.style.backgroundColor = färg;
});


textfields.forEach(field => {
  field.addEventListener("input", hanteraInput);
});


button.addEventListener("click", function () {
  div.remove(); 
});
