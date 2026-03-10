Study Resource Finder:
A front-end web application that lets users search, filter, and explore educational tools related to robotics, web design and development, and programming.
Authorship & Attribution: Wansheng Wu
Repository: https://github.com/wwu8739/study-resource-finder
Technologies used:HTML5, CSS3, JavaScript, Bootstrap, Internal JSON data, GitHub Pages
Tagline: "Quickly locate helpful programming and robotics learning resources."
User Story: I want to search and filter learning resources as a student studying robotics and programming so that I can quickly locate tutorials and documentation that are pertinent to my coursework.
Links:Repository: https://github.com/wwu8739/study-resource-finder⁠�
Live Application: https://wwu8739.github.io/study-resource-finder⁠�
Design Inspiration: This application's design was influenced by documentation websites like MDN. These websites employ card-based content organization, simple layouts, and easy navigation. This project modifies that strategy by employing Bootstrap cards to present educational materials in an orderly and readable manner.
Code Example
document.addEventListener("DOMContentLoaded", function(){

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function(){

let password = document.getElementById("password").value;

if(password === "1234"){
console.log("Login successful");
sessionStorage.setItem("user","loggedin");
}else{
console.log("Login failed");
}

});

});
Explanation:Using DOMContentLoaded, the script waits for the DOM to load completely. When the user clicks the login button, an event listener waits. The password input is read by the script from the DOM. SessionStorage is used to store the login state if the password is correct. Debugging and confirming the login procedure are aided by console messages.
Architecture / Infrastructure:This project is a client-side front-end application built using:
HTML for structure
CSS and Bootstrap for responsive layout
JavaScript for application logic
Internal JSON file for resource data
The application loads resource data from a local JSON file, then dynamically renders the content using JavaScript DOM manipulation.
Session information such as login status is stored using sessionStorage.
Verification
The application was tested on:
Desktop browser (Chrome)
Mobile browser (Android)
Verified features:
Login functionality
Console logging for login status
Search functionality
Category filtering
Dynamic resource display
External resource links
Session storage and session clearing

