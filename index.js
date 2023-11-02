// Ensure DOM Is Ready:
// Make sure your JavaScript code is executed after the HTML content is loaded. This prevents accessing elements before they exist in the DOM. You can achieve this by placing your script at the end of the HTML body or by using the DOMContentLoaded event, as shown below:

// javascript
// Copy code
// document.addEventListener('DOMContentLoaded', function() {
//     // Your JavaScript code here
// });   

        // REFERENCE FROM CHAT GPT
      document.addEventListener('DOMContentLoaded',function(){
              // hear we create h1 tag using JS
              const heading = document.createElement("h1");
              heading.innerHTML = "My name is Subhendu Adak";
      
              // add into the main HTML page
              const root = document.getElementById("root");
              root.appendChild(heading);
      
      });

