class LecturerRepository {
    constructor(connection) {
        this.connection = connection;
    }

    add(lecturer) {
        return this.connection('lecturers').insert({
            code : lecturer.getCode(),
            name : lecturer.getName(),
            gender: lecturer.getGender(),
            phone : lecturer.getPhone(),
            email : lecturer.getEmail(),
            address : lecturer.getAddress()
        })
    }

    edit(lecturer) {
        return this.connection('lecturers').update({
            code : lecturer.getCode(),
            name : lecturer.getName(),
            gender: lecturer.getGender(),
            phone : lecturer.getPhone(),
            email : lecturer.getEmail(),
            address : lecturer.getAddress()
        }).where({
            code : lecturer.getCode()
        })
    }

    remove(code) {
        return this.connection('lecturers').update({
            deleted_at : new Date().toLocaleString()
        }).where({
            code : code
        })
    }

}

module.exports = LecturerRepository;
