m.load("tutorialManagementHandler.js")


var tmh = {
    load: function(languageID, tutorialID) {
        loadScriptRedirect("tutorials/listing.tcst", function() {
            loadScriptRedirect("tutorials/" + listing.listings[languageID] + "/lesson_listings.tcst", function() {
                loadScriptRedirect("tutorials/" + listing.listings[languageID] + "/" + lesson_listings.prefix + "_" + tutorialID + "/info.tcst", function() {
                    loadScriptRedirect("tutorials/" + listing.listings[languageID] + "/" + lesson_listings.prefix + "_" + tutorialID + "/" + info.base_filedir, function() {
                        var xhr= new XMLHttpRequest();
                        xhr.open('GET', "tutorials/" + listing.listings[languageID] + "/" + lesson_listings.prefix + "_" + tutorialID + "/base/" + base.html_file_name, true);
                        xhr.onreadystatechange= function() {
                            if (this.readyState!==4) return;
                            if (this.status!==200) return; // or whatever error handling you want
                            document.getElementsByTagName('tutorialholder')[0].innerHTML= this.responseText;

                            for (var i = 0; i < document.getElementsByTagName("info").length; i++) {
                                document.getElementsByTagName("info")[i].outerHTML = "<div class='info'>" + document.getElementsByTagName("info")[i].outerHTML + "</div>"            
                            }

                            for (var i = 0; i < document.getElementsByTagName("c").length; i++) {
                                document.getElementsByTagName("c")[i].classList.add("code");            
                            }

                            for (var i = 0; i < document.getElementsByTagName("tip").length; i++) {
                                document.getElementsByTagName("tip")[i].outerHTML = "<div class='tip'>" + document.getElementsByTagName("tip")[i].outerHTML + "</div>"            
                            }

                            for (var i = 0; i < document.getElementsByTagName("critical").length; i++) {
                                document.getElementsByTagName("critical")[i].outerHTML = "<div class='critical'>" + document.getElementsByTagName("critical")[i].outerHTML + "</div>"                                            
                            }

                            for (var i = 0; i < document.getElementsByTagName("tocm").length; i++) {
                                document.getElementsByTagName("tocm")[i].outerHTML = "<div class='tocm'>" + document.getElementsByTagName("tocm")[i].outerHTML + "</div>"                                                                            
                            }

                            for (var i = 0; i < document.getElementsByTagName("integration").length; i++) {
                                document.getElementsByTagName("integration")[i].outerHTML += "<br />"            
                            }

                        };
                        xhr.send();
                    });
                }); 
            });
        });
    }
}