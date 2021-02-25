let easterFestive = (function () {
    const button = document.querySelector('.js-previous');


    // Event Listener
    button.addEventListener('click', backToLastPage)

    // When the Previous Button is clicked, It Takes the user back to the last page
    function backToLastPage(e) {
        e.preventDefault();
        console.log(history,"Previous Button is Clickedf");
        history.back();
        return;  
    }

})()