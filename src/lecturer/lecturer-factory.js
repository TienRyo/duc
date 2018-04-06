const Lecturer = require('./lecturer');

class  LecturerFactory {
    make(raw) {
        let lecturer = new Lecturer(raw.name, raw.code);
        lecturer.setGender(raw.gender);
        lecturer.setPhone(raw.phone);
        lecturer.setEmail(raw.email);
        lecturer.setAddress(raw.address);
        return lecturer;
    }
}

module.exports = LecturerFactory;
