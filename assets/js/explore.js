$(document).ready(function () {
    $('#explore').on('click', function(e) {
        e.preventDefault()
        $('#explore-content').css('display', 'block');
        $('#breakfast-content').css('display', 'none');
        $('#explore').addClass('active');
        $('#breakfast').removeClass('active')
    })

    $('#breakfast').on('click', function(e) {
        e.preventDefault()
        $('#breakfast-content').css('display', 'block');
        $('#explore-content').css('display', 'none');
        $('#breakfast').addClass('active');
        $('#explore').removeClass('active');
    })
});