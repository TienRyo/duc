class InternshipRepository {

    constructor(connection) {
        this.connection = connection;
    }

    createInternship(internship) {
        return this.connection('internships').insert({
            intern_id   : internship.getIntern().getId(),
            duration_id : internship.getDuration().getId(),
            company_id  : internship.getCompany().getId(),
            status      : internship.getStatus()
        })
    }
}

module.exports = InternshipRepository;