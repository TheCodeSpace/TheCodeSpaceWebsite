var selection = document.createElement("div")
selection.id = "slectionDiv"

// function loadLanguages() {
//     loadScriptRedirect("tutorials/listing.tcst", function() {
//         selection.innerHTML = "<h3>Select Tutorial</h3>";
//         for (var i = 0; i < listing.listings.length; i++) {
//             loadScriptRedirect("tutorials/" + listing.listings[i] + "/lesson_listings.tcst", function() {
//                 selection.innerHTML += "<button onclick='" + i + "'>" + lesson_listings.pfLanguageName + " | " + lesson_listings.amount + " Lesson(s)</button><br />"
//                 if (i == listing.listings.length - 1) {
//                     document.getElementById("selectionDiv").outerHTML = "";
//                     document.getElementsByTagName("body")[0].appendChild(selection);
//                 }
//             })
//         }
//     })
// }

function loadLanguages() {
    loadScriptRedirect("tutorials/listing.tcst", function() {
            loadScriptRedirect("tutorials/" + listing.listings[0] + "/lesson_listings.tcst", function() {
                selection.innerHTML += "<button onclick='" + 0 + "'>" + lesson_listings.pfLanguageName + " | " + lesson_listings.amount + " Lesson(s)</button><br />"
                if (0 == listing.listings.length - 1) {
                    document.getElementById("selectionDiv").outerHTML = "";
                    document.getElementsByTagName("body")[0].appendChild(selection);
                }
            })
    })
}

function loadLessons(language) {
    var selection = document.createElement("div")
    selection.id = "slectionDiv"
}