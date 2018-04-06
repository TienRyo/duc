$(document).ready(function () {

    $('#inputKeyword').keyup(function () {
        var $this = $(this);
        $('#Intern').hide();
        $.get('', {
            keyword: $this.val(),
        }).then(renderInterns)
    });
});

function renderInterns(interns) {
    var template = $('#internTemplate').html();
    var resultsHtml = interns.map(function (intern) {
        return template.replace(':internName:', intern.name)
            .replace(':code', intern.code)

    }).join('');
    $('#listInterns').html(resultsHtml);
}