function dismissCookie() {
    var cookieElement = document.querySelector("footer");
    cookieElement.remove();
}

function changeDegree() {

    var degrees = document.querySelectorAll("#tempDegree");

    var selectedValue = document.getElementById("temperature").value;

    if (selectedValue == "°F") {

        for (var i = 0; i < degrees.length; i++) {

            degrees[i].innerText = Math.round(parseInt(degrees[i].innerText) * (9 / 5) + 32);
        }
    }
    else if (selectedValue == "°C") {

        for (var i = 0; i < degrees.length; i++) {

            degrees[i].innerText = Math.round(parseInt(degrees[i].innerText) - 32 * (5 / 9));
        }
    }
}