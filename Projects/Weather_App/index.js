let btn = document.getElementById("Search-btn")
console.log(btn);

let temp = document.getElementById("temp")

let city = document.getElementById("input").value
async function getdata(){
    let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=18.6161&longitude=73.7286&hourly=temperature_2m`)
    let data = await res.json();
    console.log(data);

    temp.innerText=data.hourly.temperature_2m[0]+data.hourly_units.temperature_2m
}
btn.addEventListener("click", getdata)

