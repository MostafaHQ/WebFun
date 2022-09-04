function dismissCookie() {
    var cookieElement = document.querySelector("footer");
    cookieElement.remove();
}

// function changeDegree(element) {
//     var x = parseInt(document.querySelectorAll(".dayDegree").innerHtml);
//     var y = parseInt(document.querySelectorAll(".nightDegree").innerHtml);
//     if (element.value == "°C") {
//         ctof(x, y);
//     } else {
//         ftoc(x, y);
//     }
// }

// function ctof(x, y) {
//     for (var i = 0; i < x.length; i++) {
//         x[i].innerHtml = (x[i] * 9 / 5) + 32;
//     }console.log(x)
//     for (var j = 0; j < x.length; j++) {
//         y[j].innerHtml = (y[j] * 9 / 5) + 32;
//     }
// }

// function ftoc(x, y) {
//     for (var i = 0; i < x.length; i++) {
//         x[i].innerHtml = (x[i] - 32) * 5 / 9;
//     }
//     for (var j = 0; j < x.length; j++) {
//         y[j].innerHtml = (y[j] - 32) * 5 / 9;
//     }
// }


function changeDegree() {

    var degrees = document.querySelectorAll("#tempDegree");

    var selectedValue = document.getElementById("temperature").value;

    if (selectedValue =="°F") {

        for (var i = 0; i < degrees.length; i++) {

            degrees[i].innerText = Math.round(parseInt(degrees[i].innerText) * (9 / 5) + 32);
        }
    }
    else if (selectedValue =="°C"){

        for (var i = 0; i < degrees.length; i++) {

            degrees[i].innerText = Math.round(parseInt(degrees[i].innerText) - 32 * (5 / 9));
        }
    }
}