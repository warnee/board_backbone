$(document).ready(function() {
    console.log('start');

    function getListTemplate(data) {
        var templateText = $("#list-Template").html();
        var compiledText = Hogan.compile(templateText);
        var renderedText = compiledText.render(data);
        return renderedText;
    }

    $("#wrap").html(getListTemplate({}));

    console.log('end');
});