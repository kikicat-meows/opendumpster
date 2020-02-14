export const formatDate = dateString => {
    const options = { timeZone: 'UTC', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let myDate = new Date(dateString)

    return myDate.toLocaleDateString('en-US', options);
};