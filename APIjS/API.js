let url = "http://universities.hipolabs.com/search?name=";
let country;

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ol = document.querySelector("ol");
btn.addEventListener("click", () => {
  ol.innerText = " ";
  let inpvalue = inp.value;
  let li = document.createElement("li");
  li.innerText = inpvalue;
  ol.appendChild(li);
  inp.value = "";
});

async function getCollages(country) {
  let list = await axios.get(url+country);
 console.log(list);
}
