window.addEventListener("load", function() {
  console.log('page is fully loaded');

fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(
     function(response) {
        response.json().then( function(json) {
        console.log(json);
        const container = document.querySelector("#container");
        let astronauts = '';
        for (astronauts of json) {
            astronauts +=
            `
        <div class="astronaut">
        <div class="bio">
            <h3>${astronauts.firstName} ${astronauts.lastName}</h3>
            <ul>
           <li>Hours in space: ${astronauts.hoursInSpace}</li>
           <li>Active: ${astronauts.active}</li>
           <li>Skills: ${astronauts.skills}</li>
            </ul>
            </div> 
            <img class="avatar" src="${astronauts.picture}">
            </div> 
            `
             
        }
        container.innerHTML = astronauts;  
    console.log(astronauts);
    })

});

});