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
        /*$.ajax('mail.php', {
            async: true,
            type: "post",
            data: {
                "email": $('.contactme--email').val(),
                "message": $('.contactme--message').val()
            },
            success: function success(data) {
                $(".contactme--feedback").text("Thanks!");
                $('.contactme--email').val('');
                $('.contactme--message').val('');
            },
            error: function error() {
                $(".contactme--feedback").text("Whoops!  Something went wrong.");
            },
            complete: function complete() {
                // undepress button
                $(".contactme--button").removeClass("contactForm_button--depressed");
            }
        });*/

        var data = {
            "email": document.getElementsByClassName('contactme--email')[0].value,
            "message": document.getElementsByClassName('contactme--message')[0].value
        };
        var request = new XMLHttpRequest();
        request.open('POST', 'mail.php', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                document.getElementsByClassName('contactme--feedback')[0].innerHTML = "Thanks!";
                document.getElementsByClassName('contactme--email')[0].value = "";
                document.getElementsByClassName('contactme--message')[0].value = "";

                document.getElementsByClassName('contactme--button')[0].classList.remove("contactForm_button--depressed");

                //var resp = this.response;
            } else {
                // We reached our target server, but it returned an error
                document.getElementsByClassName('contactme--feedback')[0].innerHTML = "error!";
                document.getElementsByClassName('contactme--email')[0].value = "";
                document.getElementsByClassName('contactme--message')[0].value = "";

                document.getElementsByClassName('contactme--button')[0].removeClass("contactForm_button--depressed");
            }
        };

        request.onerror = function() {
            // There was a connection error of some sort
            document.getElementsByClassName('contactme--feedback')[0].innerHTML = "error!";
            document.getElementsByClassName('contactme--email')[0].value = "";
            document.getElementsByClassName('contactme--message')[0].value = "";

            document.getElementsByClassName('contactme--button')[0].classList.remove("contactForm_button--depressed");

        };
        request.send(data);
    }
}