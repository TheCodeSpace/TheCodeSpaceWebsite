m.load("tutorialManagementHandler.js")


var tmh = {
    load(languageID, tutorialID) {
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
                                document.getElementsByTagName("info")[i].classList.add("info")
                                document.getElementsByTagName("info")[i].outerHTML += "<br />"            
                            }
                            for (var i = 0; i < document.getElementsByTagName("tip").length; i++) {
                                document.getElementsByTagName("tip")[i].classList.add("tip")
                                document.getElementsByTagName("tip")[i].outerHTML += "<br />"            
                            }
                            for (var i = 0; i < document.getElementsByTagName("critical").length; i++) {
                                document.getElementsByTagName("critical")[i].classList.add("critical")
                                document.getElementsByTagName("critical")[i].outerHTML += "<br />"            
                            }
                            for (var i = 0; i < document.getElementsByTagName("tocm").length; i++) {
                                document.getElementsByTagName("tocm")[i].classList.add("tocm")
                                document.getElementsByTagName("tocm")[i].outerHTML += "<br />"            
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