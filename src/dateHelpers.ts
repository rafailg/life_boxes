export function addWeeks(startDate: Date, weeks: number): Date {
    const daysToAdd = weeks * 7; 
    const resultDate = new Date(startDate);
    resultDate.setDate(resultDate.getDate() + daysToAdd);
    return resultDate;
}

export function formatDateToInput(date: Date): string {
    console.log(date)
    console.log(typeof(date)) 
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export function formatDate(date: Date): string {
    const day = date.getDate();
    const year = date.getFullYear();
  
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    const month = monthNames[date.getMonth()]; // getMonth() returns a zero-based index
  
    // Format the date to DD Month YYYY
    return `${day < 10 ? '0' + day : day} ${month} ${year}`;
  }