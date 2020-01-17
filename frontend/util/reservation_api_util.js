// name your data objects { reservation } for backend params

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