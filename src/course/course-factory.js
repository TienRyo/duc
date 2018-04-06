const Course = require('./course');
const DurationProvider = require('../duration/duration-provider');
const connection = require('../../database/knex-connection');

let durationProvider = new DurationProvider(connection);
class CourseFactory {

    makeFromRequest(raw) {
        return durationProvider.provide(raw.duration_id).then(duration => {
            let course = new Course(duration);
            course.setName(raw.name);
            course.setId(raw.id);
            return course;
        })
    }
}

module.exports = CourseFactory;
