require(['toolkit'], function(toolkit){
    $('#toggle-by-element .toggle-link').on('click', function() {
        toolkit.toggle({$elClicked:$(this)});
    });
});