m.load("integrationHandler.js")

function integrations(language, tutorialID, tagID) {
    console.log(tagID)
    document.getElementById(tagID).outerHTML = "<integration id='" + tagID + "'></integration>"

    return {
        image: function(imageID) {
            document.getElementById(tagID).innerHTML = "<img src='tutorials/" + language + "/" + tutorialID + "/assets/" + imageID + "'>"
        },
        codeRealtime: {
            web: function(interactiveFile, html_lock, css_lock, js_lock) {
                loadScriptRedirect("tutorials/" + language + "/" + tutorialID + "/interactive/code_realtime/" + interactiveFile + ".tcst", function() {
                    document.getElementById(tagID).innerHTML = '<table class="interactiveTable2">\
                        <col width="50%">\
                        <col width="50%">\
                        <tr style="height: 50%;">\
                            <td>\
                                <p>HTML</p>\
                                <div onkeyup="integrationsProcessor(' + interactive.id + ').codeRealtime.web();" id="html_' + interactive.id + '" class="webLayoutFrames" style="border:1px solid black"></div>\
                            </td>\
                            <td>\
                                <p>CSS</p>\
                                <div onkeyup="integrationsProcessor(' + interactive.id + ').codeRealtime.web();" id="css_' + interactive.id + '" class="webLayoutFrames" style="border:1px solid black"></div> \
                            </td>\
                        </tr>\
                        <tr style="height: 50%;">\
                            <td>\
                                <p>JS</p>\
                                <div onkeyup="integrationsProcessor(' + interactive.id + ').codeRealtime.web();" id="js_' + interactive.id + '" class="webLayoutFrames" style="border:1px solid black"></div> \
                            </td>\
                            <td>\
                                <p>Result</p>\
                                <iframe id="result_' + interactive.id + '" class="webLayoutFrames" style="border:1px solid black; background: white;"></iframe> \
                            </td>\
                        </tr>\
                    </table>';
                    
                    createEditor("html_" + interactive.id, interactive.defaults.html, "html", html_lock);
                    createEditor("css_" + interactive.id, interactive.defaults.css, "css", css_lock);
                    createEditorCallback("js_" + interactive.id, interactive.defaults.js, "javascript", js_lock, "integrationsProcessor(" + interactive.id + ").codeRealtime.web();");

                });
                
            },
            html: function(interactiveFile, html_lock) {
                loadScriptRedirect("tutorials/" + language + "/" + tutorialID + "/interactive/code_realtime/" + interactiveFile + ".tcst", function() {
                    document.getElementById(tagID).innerHTML = '<table class="interactiveTable1">\
                        <col width="50%">\
                        <col width="50%">\
                        <tr style="height: 50%;">\
                            <td>\
                                <p>HTML</p>\
                                <div onkeyup="integrationsProcessor(' + interactive.id + ').codeRealtime.html();" id="html_' + interactive.id + '" class="webLayoutFrames" style="border:1px solid black"></div>\
                            </td>\
                            <td>\
                                <p>Result</p>\
                                <iframe id="result_' + interactive.id + '" class="webLayoutFrames" style="border:1px solid black; background: white;"></iframe> \
                            </td>\
                        </tr>\
                    </table>';
                    
                    createEditorCallback("html_" + interactive.id, interactive.defaults.html, "html", html_lock, "integrationsProcessor(" + interactive.id + ").codeRealtime.html();");

                });
                
            }
        },
        toc: function() {
            loadScriptRedirect("tutorials/" + language + "/" + tutorialID + "/interactive/toc.tcst", function() {
                var tocList = "<h1>" + table_of_contents.headname + "</h1><br />";
                for (var i = 0; i < document.getElementsByTagName("tocm").length; i++) {
                    document.getElementsByTagName("tocm")[i].id = "toc_" + i
                    tocList += "<a href='#toc_" + i + "'>" + document.getElementsByTagName("tocm")[i].innerHTML + "</a><br />"

                    if (i == document.getElementsByTagName("tocm").length - 1) {
                        document.getElementById(tagID).innerHTML = tocList;
                    }
                }
            })
            
        }
    }
}

function integrationsProcessor(interactiveID) {
    return {
        codeRealtime: {
            web: function() {
                var html = document.getElementById("var__html_" + interactiveID);
                var css = document.getElementById("var__css_" + interactiveID);
                var js = document.getElementById("var__js_" + interactiveID);
                var result = document.getElementById("result_" + interactiveID);
                var iframe = result.contentDocument;
                var style = document.createElement("style");
                var script = document.createElement("script");
                
                result.contentDocument.getElementsByTagName("html")[0].innerHTML = monaco.editor.getModels()[html.innerHTML - 1].getValue();
                style.innerHTML = monaco.editor.getModels()[css.innerHTML - 1].getValue();
                script.innerHTML = monaco.editor.getModels()[js.innerHTML - 1].getValue();
                iframe.head.appendChild(style);
                iframe.head.appendChild(script);
            },
            html: function() {
                var html = document.getElementById("var__html_" + interactiveID);
                var result = document.getElementById("result_" + interactiveID);
                var iframe = result.contentDocument;
                
                result.contentDocument.getElementsByTagName("html")[0].innerHTML = monaco.editor.getModels()[html.innerHTML - 1].getValue();

            }
        }
        }   
}
