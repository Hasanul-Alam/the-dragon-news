export function getCurrentDateInfo() {
    const now = new Date();
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getDay()];
  
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = months[now.getMonth()];
  
    const date = now.getDate();
    const year = now.getFullYear();
  
    return {
      day: day,
      month: month,
      date: date,
      year: year
    };
  }
  const currentDate = getCurrentDateInfo();
  console.log(currentDate.day)
  