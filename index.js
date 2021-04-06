console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
});


getData();

function getData() {
    
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(handleFetchResponse)
    .then(useJSONResponse);
     
}

function handleFetchResponse(response) {
    console.log("response", response);
    return response.json();
}

function useJSONResponse(json) {
 console.log(json);
 renderDogList(json);
}


function renderDogList(ata) {

    const breeds = document.getElementById("breeds");
    const breedsList = [];
    const list = document.createElement("list");
    
    
    console.log(ata.message);
    breeds.innerHTML = Object.keys(ata.message);
    breedsList.push(ata.message);
    console.log(breedsList);
    

}