class Duration {
    constructor(startDate, endDate ) {
        this.starDate = startDate;
        this.endDate  = endDate;
    }

    getStartDate() {
        return this.starDate;
    }

    getEndDate() {
        return this.endDate;
    }

    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }

}

module.exports = Duration;
