loadScriptRedirect("api/householdHandler.js", function() {
    
    loadScriptRedirect("api/editor.js", function() {
        initEditorCreation();
    });
    
    loadScript("api/integrationHandler.js");
    loadScript("api/tutorialManagementHandler.js");
    

});    
