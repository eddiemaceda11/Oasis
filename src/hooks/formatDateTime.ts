export function formatCurrentDateTime() {
    const date = new Date(); // Get current date and time
    
    // Get month, day, year
    const month = date.getMonth() + 1; // Months are zero indexed
    const day = date.getDate();
    const year = date.getFullYear();
  
    // Get hours and minutes
    let hours = date.getHours();
    let minutes: number | string = date.getMinutes();
  
    // Convert hours to 12-hour format and determine am/pm
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
  
    // Format minutes with leading zero if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    // Construct the formatted date and time string
    const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes}${ampm}`;
  
    return formattedDateTime;
  }