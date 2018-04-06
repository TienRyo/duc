class DurationRepository {
    constructor(connection) {
        this.connection = connection;
    }

    add(duration) {
        return this.connection('durations').insert({
            startDate : duration.getStartDate(),
            endDate   : duration.getEndDate()
        })
    }
}

module.exports = DurationRepository;
