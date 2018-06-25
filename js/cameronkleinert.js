function scrollToId(elementId) {
    // Scroll to a certain element
    document.querySelector("#" + elementId).scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: 'smooth'
    });
}

function scrollToIdOverlay(elementId) {

    document.getElementById('toggle').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('open');

    // Scroll to a certain element
    document.querySelector("#" + elementId).scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: 'smooth'
    });
}

function matches(el, selector) {
    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
}

function sendEmail() {

    if (!(document.getElementsByClassName('contactme--email')[0].checkValidity())) {
        //$(".contactme--feedback").text("Whoops!  Please enter a valid email address.");
        document.getElementsByClassName('contactme--feedback')[0].innerHTML = "Whoops!  Please enter a valid email address.";

    } else if (!(document.getElementsByClassName('contactme--message')[0].checkValidity())) {
        //$(".contactme--feedback").text("Whoops!  Please enter a message before sending.");
        document.getElementsByClassName('contactme--feedback')[0].innerHTML = "Whoops!  Please enter a message before sending."
    } else {
        //depress button
        //$(".contactme--button").addClass("contactme--button--depressed");
        document.getElementsByClassName('contactme--button')[0].classList.add("contactme--button--depressed");

        $.ajax('js/mail.php', {
            async: true,
            type: "post",
            data: {
                "email": document.getElementsByClassName('contactme--email')[0].value,
                "message": document.getElementsByClassName('contactme--message')[0].value,
            },
            success: function success(data) {
                document.getElementsByClassName('contactme--feedback')[0].innerHTML = "Thanks!";
                document.getElementsByClassName('contactme--email')[0].value = "";
                document.getElementsByClassName('contactme--message')[0].value = "";
            },
            error: function error(a, b, c) {
                document.getElementsByClassName('contactme--feedback')[0].innerHTML = "Whoops!  Something went wrong." + b.toString() + "; " + c.toString();

            },
            complete: function complete() {
                // undepress button
                document.getElementsByClassName('contactme--button')[0].classList.remove("contactme--button--depressed");
            }
        });
    }
}