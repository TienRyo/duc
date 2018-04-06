const status = require('../status/status');

class CourseRepository {
    constructor(connection) {
        this.connection = connection;
    }

    add(course) {
        return this.connection('courses').insert({
            duration_id  : course.getDuration().getId(),
            status    : status.CONFIRMED,
            name      : course.getName()
        })
    }

}

module.exports = CourseRepository;
