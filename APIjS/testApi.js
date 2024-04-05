let url = "http://universities.hipolabs.com/search?name=";

let country;
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");

async function getCollage(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

function showData(collages){
    ol.innerText="";
    for (col of collages) {
        let li=document.createElement("li");
        li.innerText=col.name;
        ol.appendChild(li)
    }
}
btn.addEventListener("click",async ()=>{
    let country=inp.value;
    let collages= await getCollage(country);
    showData(collages);
    inp.value=""
})