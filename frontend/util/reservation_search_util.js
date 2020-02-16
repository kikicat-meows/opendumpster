import React from 'react';
import { formatOpeningTime } from './format_time_util';

export const selectTimeslots = () => {
    const timeOptions = [];
    for (let i = 9; i <= 23; i += 0.5) {
        timeOptions.push(i);
    }
    let timeString;
    return timeOptions.map((opt, i) => {
        timeString = formatOpeningTime(opt);
        return <option
            className="search-select-time"
            key={i}
            value={`${opt}`}>
            {timeString}
        </option>
    })
}

export const selectNumOfSeats = () => {
    const seats = [];
    for (let i = 1; i <= 10; i++) {
        seats.push(i);
    }
    seats.push('Larger party');
    let sizeString;
    return seats.map((opt, i) => {
        if (opt === 1) {
            sizeString = `${opt} person`
        }
        if (opt > 1) {
            sizeString = `${opt} people`
        }
        if (typeof opt === 'string') {
            sizeString = `${opt}`
        }

        return <option
            className="search-select-seats"
            key={i}
            value={`${opt}`}>
            {sizeString}
        </option>
    })
}

export const selectNumOfSeatsShow = () => {
  const seats = [];
  for (let i = 1; i <= 10; i++) {
    seats.push(i);
  }
  let sizeString;
  return seats.map((opt, i) => {
    sizeString = `For ${opt}`

    return (
      <option className="show-search-select-seats" key={i} value={`${opt}`}>
        {sizeString}
      </option>
    );
  });
};