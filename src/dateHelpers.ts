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
