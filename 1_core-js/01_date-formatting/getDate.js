function getDate(day, month, year, format = 'day.month.year') {
    if (
        (typeof(day) === 'number') && (1 <= day <= 31) &&
        (typeof(month) === 'number') && (1 <= month <= 12) &&
        (typeof(year) === 'number') && year >= 1000
    ) {
        let date;
        switch(format) {
            case 'day.month.year':
                date = [day, month, year].join('.');
                break;

            case 'year_month_day':
                date = [year, month, day].join('_');
                break;

            case 'object':
                date = { day, month, year };
                break;

            case 'iso':
                date = new Date([day, month, year].join('-')).toISOString();
                break;
        };

        return date;
    };
    
    return null;
}
