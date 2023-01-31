import { saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage } from './saveToLocalStorageByName.js';


let nameBtn = document.getElementById('nameBtn');
let nameOutPut = document.getElementById("nameOutPut");
let lastFiveBtn = document.getElementById("lastFiveBtn");
let studentnames;

nameBtn.addEventListener("click", function () {
    NameGenerator();
})

lastFiveBtn.addEventListener("click", function () {
    GetFavorites();
})

async function AsyncGetData() {
    const promise = await fetch('./data/data.json')
    const data = await promise.json();
    studentnames = data
}
AsyncGetData();


function NameGenerator() {
    let random = Math.floor(Math.random() * studentnames.studentNames.length);
    nameOutPut.innerText = studentnames.studentNames[random].Name;  
    console.log(random);
    saveToLocalStorageByName(studentnames.studentNames[random].Name) 
  }



