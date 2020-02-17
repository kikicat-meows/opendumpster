export const formatDate = dateString => {
    const options = { timeZone: 'UTC', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let myDate = new Date(dateString)

    return myDate.toLocaleDateString('en-US', options);
};

export const formatDateShort = dateString => {
  const options = {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "numeric"
  };

  let myDate = new Date(dateString);

  return myDate.toLocaleDateString("en-US", options);
};

export const formatDateSlash = dateString => {
  function pad(s) { return (s < 10) ? '0' + s : s; }

  let d = new Date(dateString);

  return [pad(d.getUTCDate()), pad(d.getUTCMonth()+1), d.getUTCFullYear()].join('/')
}