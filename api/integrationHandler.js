m.load("integrationHandler.js")

function integrations(language, tutorialID, tagID) {
    return {
        image: function(imageID) {
            document.getElementById(tagID).innerHTML = "<img src='tutorials/" + language + "/" + tutorialID + "/assets/" + imageID + "'>"
        }
    },
    {
        codeRealtime: {
            web: function(interactiveFile) {
                loadScriptRedirect("tutorials/" + language + "/" + tutorialID + "/interactive/code_realtime/" + interactiveFile + ".tcst", function() {
                    document.getElementById(tagID).innerHTML = '<table width="800px" height="600px" style=" border: 1px solid black;">\
                        <col width="50%">\
                        <col width="50%">\
                        <tr style="height: 50%;">\
                            <td>\
                                <p>HTML</p>\
                                <div onkeyup="codeRealtime("' + interactive.id + '");" id="html_' + interactive.id + '" style="width:390px;height:290px;border:1px solid black"></div>\
                            </td>\
                            <td>\
                                <p>CSS</p>\
                                <div onkeyup="codeRealtime("' + interactive.id + '");" id="css_' + interactive.id + '" style="width:390px;height:290px;border:1px solid black"></div> \
                            </td>\
                        </tr>\
                        <tr style="height: 50%;">\
                            <td>\
                                <p>JS</p>\
                                <div onkeyup="codeRealtime("' + interactive.id + '");" id="js_' + interactive.id + '" style="width:390px;height:290px;border:1px solid black"></div> \
                            </td>\
                            <td>\
                                <p>Result</p>\
                                <iframe id="result_' + interactive.id + '" style="width:390px;height:290px;border:1px solid black"></iframe> \
                            </td>\
                        </tr>\
                    </table>';
                    
                    createEditor("html_" + interactive.id, interactive.defaults.html, "html");
                    createEditor("css_" + interactive.id, interactive.defaults.css, "css");
                    createEditor("js_" + interactive.id, interactive.defaults.js, "javascript");

                });
                
            }
        }
    }
}

// function integrationsProcessor(interactiveID) {
//     return {
//         codeRealtime: function() {
//             var html = document.getElementById("var__html_" + interactiveID);
//             var css = document.getElementById("var__css_" + interactiveID);
//             var js = document.getElementById("var__js_" + interactiveID);
//             var result = document.getElementById("result_" + interactiveID);
//             var iframe = result.contentDocument;
//             var style = iframe.createElement("style");
//             var script = iframe.createElement("script");
            
//             iframe.innerHTML = monaco.editor.getModels[html.innerHTML].getValue();
//             style.innerHTML = monaco.editor.getModels[css.innerHTML].getValue();
//             script.innerHTML = monaco.editor.getModels[js.innerHTML].getValue();
//             iframe.body.appendChild(style);
// 			iframe.body.appendChild(script);
//         }
//     }
// }

function codeRealtime(interactiveID) {
        
                var html = document.getElementById("var__html_" + interactiveID);
                var css = document.getElementById("var__css_" + interactiveID);
                var js = document.getElementById("var__js_" + interactiveID);
                var result = document.getElementById("result_" + interactiveID);
                var iframe = result.innerHTML;
                var style = iframe.createElement("style");
                var script = iframe.createElement("script");
                
                iframe.innerHTML = monaco.editor.getModels()[html.innerHTML].getValue();
                style.innerHTML = monaco.editor.getModels()[css.innerHTML].getValue();
                script.innerHTML = monaco.editor.getModels()[js.innerHTML].getValue();
                iframe.body.appendChild(style);
    			iframe.body.appendChild(script);
            
    }