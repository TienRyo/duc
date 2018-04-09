const status = require('../status/status');
class InternshipRepository {

    constructor(connection) {
        this.connection = connection;
    }

    createInternship(internship) {
        return this.connection('internships').insert({
            company_id  : internship.getCompany().getId(),
            intern_id   : internship.getIntern().getId(),
            duration_id : internship.getDuration().getId(),
            status      : status.OPEN
        })
    }




}

module.exports = InternshipRepository;