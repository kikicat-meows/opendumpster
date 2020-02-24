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


export const getTodayDateString = () => {
  const today = new Date();

  let dateArray = today.toLocaleDateString().split('/');

  
  let year = dateArray[2];
  let month = dateArray[0];
  let date = dateArray[1];

  let formatMonth = (month < 10) ? `0${month}` : month;
  let formatDate = (date < 10) ? `0${date}` : date;

  return `${year}-${formatMonth}-${formatDate}`;


}