require(['toolkit'], function(toolkit){
    $('#toggle-by-element-closed .toggle-link').on('click', function() {
        toolkit.toggle({$elClicked:$(this)});
    });
});