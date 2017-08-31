m.load("integrationHandler.js")

function integrations(language, tutorialID, tagID) {
    function image(imageID) {
        document.getElementById(tagID).innerHTML = "<img src='tutorials/" + language + "/" + tutorialID + "/assets/" + imageID + "'>"
    }
}