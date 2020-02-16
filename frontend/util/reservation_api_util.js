// name your data objects { reservation } for backend params

// export const fetchUserReservations = userId => (
//     $.ajax({
//         url:
//     })
// );

export const fetchAReservation = id => (
    $.ajax({
        method: 'GET',
        url: `api/reservations/${id}`,
    })
);


export const createReservation = reservation => (
    $.ajax({
        method: 'POST',
        url: 'api/reservations/',
        data: { reservation },
    })
);

export const updateReservation = ({reservationId, reservation}) => (
    $.ajax({
        method: 'PATCH',
        url: `api/reservations/${reservationId}`,
        data: { reservation },
    })
)