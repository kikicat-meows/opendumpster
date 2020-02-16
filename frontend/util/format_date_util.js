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