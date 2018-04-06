class LecturerRepository {
    constructor(connection) {
        this.connection = connection;
    }

    add(lecturer) {
        return this.connection('lecturers').insert({
            name : lecturer.getName(),
            gender: lecturer.getGender(),
            phone : lecturer.getPhone(),
            email : lecturer.getEmail(),
            address : lecturer.getAddress()
        })
    }

    edit(lecturer) {
        return this.connection('lecturers').update({
            name : lecturer.getName(),
            gender: lecturer.getGender(),
            phone : lecturer.getPhone(),
            email : lecturer.getEmail(),
            address : lecturer.getAddress()
        }).where({
            code : lecturer.getCode()
        })
    }

    remove(lecturer) {
        return this.connection('lecturers').update({
            deleted_at : new Date().toLocaleString()
        }).where({
            code : lecturer.getCode()
        })
    }

}

module.exports = LecturerRepository;
