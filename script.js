document.getElementById("colorSubmit").addEventListener("click", function(event) {
        event.preventDefault();
        const value = document.getElementById("colorInput").value;
        console.log(value);
        if(value === ""){
                const url = "https://x-colors.herokuapp.com/api/random";
                fetch(url)
                  .then(function(response) {
                          return response.json();
                  }) .then(function(json) {
                          let results = "";
                          results += json.hex;
                          document.body.style.backgroundColor = results;
                  });
        }


const url = "https://x-colors.herokuapp.com/api/random/"+ value;
  fetch(url)
   .then(function(response) {
           return response.json();
           }) .then(function(json) {
                  let results = "";
                   results += json.hex;
                   document.body.style.backgroundColor = results;
        });
});
