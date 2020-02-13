// name your data objects { reservation } for backend params

// export const fetchUserReservations = userId => (
//     $.ajax({
//         url:
//     })
// );

export const fetchAReservation = id => (
    $.ajax({
        url: `api/reservations/${id}`,
        method: 'GET'
    })
);


export const createReservation = reservation => (
    $.ajax({
        url: 'api/reservations/',
        method: 'POST',
        data: { reservation }
    })
);