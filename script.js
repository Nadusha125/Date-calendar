let startDate;
let endDate;

const startChange = (date) => {
    startDate = new Date(date.value).getTime();
    console.log(startDate) 
}

const endChange = (date) => {
    endDate = new Date(date.value).getTime();
    console.log(endDate) 
}

let vacancyPeriods = [
    {start: "01/1/2024 00:00", end: "01/5/2024 00:00"},
    {start: "01/6/2024 00:00", end: "01/8/2024 00:00"},
    {start: "01/14/2024 00:00", end: "01/21/2024 00:00"}
]

const chackDate = () => {
    const isAvailable = vacancyPeriods.some((vacancyPeriod) => {
        const isAvailableStartDate = new Date(vacancyPeriod.start).getTime();
        const isAvailableEndDate = new Date(vacancyPeriod.end).getTime();
        console.log(isAvailableStartDate, isAvailableEndDate);
        return (
            startDate >= isAvailableStartDate &&
            endDate <= isAvailableEndDate
        )
    })

   
    if(isAvailable) {
        alert("Успешно забронировано!")
    } else if (startChange.value === startDate || endChange.value === endDate) {
        alert("Выберите дату")
    } else (
        alert("Выбранные даты уже забронированы")
    )
}