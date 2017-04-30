$(document).ready(function() {
    $('div.panel-body div').click(function() {
        var div = $(this);
        var a = div.find('a');
        var dest = a.attr('href');
        window.open(dest, '_blank');
    });
});