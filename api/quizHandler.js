m.load("quizHandler.js")

function quizHandler(language, tutorialID, quizFile, tagID) {
    return {
        load: function() {
            loadScriptRedirect("tutorials/" + language + "/" + tutorialID + "/quiz/" + quizFile + ".tcst", function(){
                var quizHTML;
                for (var i = 0; i < quiz.questions.length; i++) {
                    if (quiz.questions[i].type == 0) {
                        quizHTML[i] += "<div><p class='quizHeader'>Question 1: Select the correct answer.</p><br /><br /><p class='quizStatement'>" + quiz.questions[i].statement + "</p><br />"
                        for (var f = 0; f < quiz.questions[i].lenght; f++) {
                            quizHTML[i] += '<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="quiz_q_r_o_' + quiz.id + '_' + i + '_' + f + '">\
                                <input type="radio" id="quiz_q_r_o_' + quiz.id + '_' + i + '_' + f + '" class="mdl-radio__button" name="quiz_q_r_' + quiz.id + '_' + i + '" value="1">\
                                <span class="mdl-radio__label">' + quiz.questions[i].questions[f] + '</span>\
                             </label>'

                             if (f == quiz.questions[i].lenght - 1) {
                                quizHTML[i] += "</div>"
                             }
                        }
                    } else if (quiz.questions[i].type == 1) {
                        for (var f = 0; f < quiz.questions[i].text.length; f++) {
                            if (quiz.text[i].text == undefined) {
                                for (var g = 0; g < quiz.questions[i].text[f].options.length; gf++) {
                                    if (g == 0) {
                                        quizHTML[i] += '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth">\
                                        <input class="mdl-textfield__input" type="text" id="quiz_q_d_' + quiz.id + '_' + i + '" value="Belarus" readonly tabIndex="-1">\
                                        <label for="quiz_q_d_' + quiz.id + '_' + i + '" class="mdl-textfield__label">Select</label>\
                                        <ul for="quiz_q_d_' + quiz.id + '_' + i + '" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">'
                                    }

                                    quizHTML[i] += '<li class="mdl-menu__item">' + quiz.questions[i].text[f].options[g] + '</li>'
                                    
                                    if (g == quiz.questions[i].text[f].options.length - 1) {
                                        quizHTML[i] += '</ul>\
                                        </div>'
                                    }
                                }
                            } else {
                                quizHTML[i] += "<p class='quizText'>" + quiz.text[i].text + "</p>"
                            }
                        }
                    } else if (quiz.questions[i].type == 2) {
                        
                    }

                    if (i == 2) {
                        document.getElementById(tagID).innerHTML = quizHTML[0] + quizHTML[1]
                    }
                }
            });
        }
    }
}