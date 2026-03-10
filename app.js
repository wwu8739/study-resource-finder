document.addEventListener("DOMContentLoaded", function () {

console.log("App Loaded");

const loginBtn = document.getElementById("login-btn");
const results = document.getElementById("results");

let resources = [];

fetch("scripts/data.json")
.then(res => res.json())
.then(data => {

resources = data;
display(resources);

});

loginBtn.addEventListener("click", function(){

let password = document.getElementById("password").value;

if(password === "1234"){

console.log("Login successful");

sessionStorage.setItem("user","loggedin");

document.getElementById("status").innerText="Login success";

}else{

console.log("Login failed");

document.getElementById("status").innerText="Wrong password";

}

});

document.getElementById("search").addEventListener("input", searchResources);

document.getElementById("filter").addEventListener("change", searchResources);

function searchResources(){

let keyword = document.getElementById("search").value.toLowerCase();

let category = document.getElementById("filter").value;

let filtered = resources.filter(item => {

let matchTitle = item.title.toLowerCase().includes(keyword);

let matchCategory = category === "all" || item.category === category;

return matchTitle && matchCategory;

});

display(filtered);

}

function display(list){

results.innerHTML="";

list.forEach(item => {

results.innerHTML += `
<div class="col-md-4">
<div class="card p-3">
<h5>${item.title}</h5>
<p>${item.category}</p>
<a href="${item.link}" target="_blank">Visit Resource</a>
</div>
</div>
`;

});

}

});
