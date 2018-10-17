function getWeekDay(date) {
    let day = date.getDay();
    switch(day) {
        case 0:
            return "SU";
            break;
        case 1:
            return "MO";
            break;
        case 2:
            return "TU";
            break;
        case 3:
            return "WE";
            break;
        case 4:
            return "TH";
            break;
        case 5:
            return "FR";
            break;
        case 6:
            return "SA";
            break;                        
    }
}

function getWeekDay(date) {
    let day = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    return day[date.getDay()];
}