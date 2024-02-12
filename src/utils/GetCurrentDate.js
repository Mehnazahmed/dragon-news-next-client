export function showCurrentDate() {
    // Create a new Date object
    const currentDate = new Date();
  
    // Get day, month, date, and year
    const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    // Display the information
    return ` ${day}, ${month}, ${date}, ${year}`
   
  }
  
  // Call the function to display the current date
  showCurrentDate();
  