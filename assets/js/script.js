// //let userInput = document.getElementById("textarea1").textContent;

// //const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://edamam-recipe-search.p.rapidapi.com/search?q=" + userInput + "diet=" + radio,
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "9d3fc1b0e6mshf2a5aae79eb7bb6p179335jsnf7cabbb320b3",
// 		"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
console.log("haha");

$("#form").submit(function (event) {
    let userInput = $("#textarea1").val();
    console.log("input" + userInput);
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://edamam-recipe-search.p.rapidapi.com/search?q=" + userInput,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9d3fc1b0e6mshf2a5aae79eb7bb6p179335jsnf7cabbb320b3",
            "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com"
        }
    };

    event.preventDefault();


    // work on footer goddamnit
    // research syntax - for loops objects in arrays (INDEX IS NEEDED)
    // how to assign results of ajax call as a variable?
    $.ajax(settings).then(function (response) {
        let hits = response.hits;
        for (i = 0; i < hits.length; i++) {
            let test = (hits[i].recipe.url);
            let tr = "<tr><td><a>" + test + "</a></td></tr>"

            $("#recipes").append(tr);
        };
        // function findRecipes() {
        //     // Create a new table row element
        //     // let tRow = $("<tr>");
        //     let resultRecipe = response.hits;
        //     $("#recipe1").append(resultRecipe[0].recipe.url)
        //     $("#recipe2").append(resultRecipe[1].recipe.url)
        //     $("#recipe3").append(resultRecipe[2].recipe.url)
        //     $("#recipe4").append(resultRecipe[3].recipe.url)
        //     $("#recipe5").append(resultRecipe[4].recipe.url)



        //     // let recipe1 = $("<tr>").text(first);
        //     // let recipe2 = $("<tr>").text(second);
        //     // let recipe3 = $("<tr>").text(third);
        //     // let recipe4 = $("<tr>").text(fourth);
        //     // let recipe5 = $("<tr>").text(fifth);
        //     // Append the newly created table data to the table row
        //     //  $("tr").append(first, second, third, fourth, fifth);
        //     // Append the table row to the table body
        // };
        // findRecipes();

    });

});





// var unirest = require("unirest");

// var req = unirest("GET", "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote");

// req.query({
//     "token": "ipworld.info"
// });

// req.headers({
//     "x-rapidapi-key": "",
//     "x-rapidapi-host": "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
//     "useQueryString": true
// });


// req.end(function (res) {
//     if (res.error) throw new Error(res.error);

//     console.log(res.body);
// });



// var unirest = require("unirest");

// var req = unirest("GET", "https://edamam-recipe-search.p.rapidapi.com/search");

// req.query({
//     "q": "cucumber"
// });

// req.headers({
//     "x-rapidapi-key": "",
//     "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
//     "useQueryString": true
// });


// req.end(function (res) {
//     if (res.error) throw new Error(res.error);

//     console.log(res.body);
// });
