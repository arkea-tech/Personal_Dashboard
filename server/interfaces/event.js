class Event {
    constructor(title, colorId, startDate, endDate)
    {
        this.title = title;
        this.colorId = colorId;
        this.time = {
            start_date: startDate,
            end_date: endDate
        };
    }
}

module.exports = {
    Event: Event
}
