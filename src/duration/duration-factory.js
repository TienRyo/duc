const Duration = require('./duration');

class DurationFactory {
    make(raw) {
        let duration = new Duration(raw.startDate, raw.endDate);
        duration.setId(raw.id);
        return duration;
    }
}

module.exports= DurationFactory;
