//jshint esversion:6
module.exports = getDate;

function getDate() {

    let today = new Date();

    let options = {
        day: "numeric",
        month: "long",
        weekday: "long"
    };

    let day = today.toLocaleDateString("en-us", options);
    return day;
}

