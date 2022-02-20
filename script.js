document.getElementById("colorSubmit").addEventListener("click", function(event) {
        event.preventDefault();
        const value = document.getElementById("colorInput").value;
        console.log(value);
        if(value === ""){

		return;
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


const url1 = "https://x-colors.herokuapp.com/api/random/"+ value +"?number=3";
  fetch(url1)
   .then(function(response) {
           return response.json();
           }) .then(function(json) {
                  let results = json[0].hex;
		   let results2 = json[1].hex;
		   let results3 = json[2].hex;
                   document.getElementById("div1").style.backgroundColor = results;
		   document.getElementById("div2").style.background = results2;
		   document.body.style.backgroundColor = results3;

	   });

/*	const url2 = "https://x-colors.herokuapp.com/api/random/" + value;
  fetch(url2)
   .then(function(response) {
           return response.json();
           }) .then(function(json) {
                  let results2 = "";
                   results2 += json.hex;
                   document.body.style.BackgroundColor = results2;
        });

	const url = "https://x-colors.herokuapp.com/api/random/"+ value;
  fetch(url)
   .then(function(response) {
           return response.json();
           }) .then(function(json) {
                  let results = "";
                   results += json.hex;
                   document.getElementById("div3").style.backgroundColor = results;
        });

	const url = "https://x-colors.herokuapp.com/api/random/"+ value;
  fetch(url)
   .then(function(response) {
           return response.json();
           }) .then(function(json) {
                  let results = "";
                   results += json.hex;
                   document.getElementById("div4").style.backgroundColor = results;
        });*/
});
