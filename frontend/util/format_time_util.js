export const formatOpeningTime = (timeString) => {
    let timeInt = parseFloat(timeString);

    let minutes = timeInt % 1;
    let hours = Math.floor(timeInt);

    let minuteString = (minutes > 0) ?
        "30" : "00";

    let formatTime;

    if (timeInt < 12) {
        formatTime = `${hours}:${minuteString} AM`;
    } else if (timeInt >= 12 && timeInt < 13) {
        formatTime = `${hours}:${minuteString} PM`;
    } else if (timeInt >= 13 && timeInt < 24) {
        formatTime = `${hours - 12}:${minuteString} PM`;
    } else {
        formatTime = `${hours - 24}:${minuteString} AM`;
    }

    return formatTime;
};


export const formatClosingTime = (timeString) => {
    let timeInt = parseFloat(timeString);
    timeInt = timeInt + 0.5;

    let minutes = timeInt % 1;
    let hours = Math.floor(timeInt);

    let minuteString = (minutes > 0) ?
        "30" : "00";

    let formatTime;

    if (timeInt < 12) {
        formatTime = `${hours}:${minuteString} AM`;
    } else if (timeInt >= 12 && timeInt < 13) {
        formatTime = `${hours}:${minuteString} PM`;
    } else if (timeInt >= 13 && timeInt < 24) {
        formatTime = `${hours - 12}:${minuteString} PM`;
    } else {
        formatTime = `${hours - 24}:${minuteString} AM`;
    }

    return formatTime;
};


export const getCurrentTimeInteger = () => {
    let today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let minutesFraction = Math.round( (minutes / 60 ) * 10) / 10;

    return hours + minutesFraction;
}