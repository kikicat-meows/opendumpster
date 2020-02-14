export const formatSeat = seatCount => {
    let seatString;
    if (seatCount === 1) {
        seatString = `${seatCount} person`
    }
    if (seatCount > 1) {
        seatString = `${seatCount} people`
    }

    return seatString
}