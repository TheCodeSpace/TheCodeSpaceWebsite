var m = {
    info: function(message) {
        console.info(message);
    },
    
    error: function(message) { 
        console.error(message);
    },
    
    debug: function(message) {
        console.error("db_nffr_: " + message);
    },
    
    load: function(location) {
        console.info("Loaded " + location)
    },
    
    init: function (clause) {
        console.info("Initialized " + clause)
    }
}    


