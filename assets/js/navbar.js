let joinButton = $('.join-collapse').hide()


$(document).ready(function () {

    //Navbar join now opening-closing

    $('.nav-tog').on('click', function () {
        $('.nav-join-collapse').toggle('slow', 'swing')
        $('.explore').hide('slow', 'swing')
    })

    $('.nav-menu').on('click', function () {
        $('.nav-join-collapse').toggle('slow', 'swing')
    })

    //Explore join now opening-closing

    $('.explore-nav').on('click', function () {
        $('.explore-join-collapse').toggle('slow', 'swing')
    })

    $('.explore-menu').on('click', function () {
        $('.explore-join-collapse').toggle('slow', 'swing')
    })

    //explore menu opening-closing

    $('.toggle-pop-up').on('click', function () {
        $('.explore').show('slow', 'swing')
        $('.nav-join-collapse').hide('slow', 'swing')

        //background darker and scroll disabled
        $('body').addClass('disable-scroll')
        $('.site-cache').css('display','block')
    })

    $('.explore-close-icon').on('click', function () {
        $('.explore').hide('fast', 'linear')

        //backgroun ligter and scroll enable
        $('body').removeClass('disable-scroll')
        $('.site-cache').css('display','none')
        $('.explore-join-collapse').hide('fast', 'swing')
    })
})
/*

    function disable() {
        document.querySelector('body').classList.add('disable-scroll');
    }
    
    function enable() {
        document.querySelector('body').classList.remove('disable-scroll');
    }

    let checkOpened = $('.explore').show('slow','swing')
document.querySelector('.toggle-pop-up').addEventListener('click', disable);
document.querySelector('.toggle-pop-up').addEventListener('click', enable); */