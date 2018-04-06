const status = require('../../src/status/status');
class InternRepository {
    constructor(connection) {
        this.connection = connection
    }



    add(intern) {
        return this.connection('interns').insert({
            code    : intern.getCode(),
            name    : intern.getName(),
            status  : intern.getStatus(),
            gender  : intern.getGender(),
            phone   : intern.getPhone(),
            email   : intern.getEmail(),
            address : intern.getAddress()
        })
    }

    edit(intern) {
        return this.connection('interns').update({
            code    : intern.getCode(),
            name    : intern.getName(),
            status  : intern.getStatus(),
            gender  : intern.getGender(),
            phone   : intern.getPhone(),
            email   : intern.getEmail(),
            address : intern.getAddress()
        }).where({
            code : intern.getCode()
        })
    }

    /*remove(code) {
        return this.connection('interns').update({
            status : status.FINISHED
        }).where({
            code : code
        })
    }*/

    remove(lecturer) {
        return this.connection('interns').update({
            deleted_at: new Date().toLocaleString()
        }).where({
            code : lecturer.getCode()
        })
    }
}

module.exports = InternRepository;
