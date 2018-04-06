const Intern = require('./intern');

class InternFactory {

    make(raw) {
        let intern = new Intern(raw.code, raw.name);
        intern.setStatus(raw.status);
        intern.setAddress(raw.address);
        intern.setGender(raw.gender);
        intern.setEmail(raw.email);
        intern.setPhone(raw.phone);
        return intern;
    }
}

module.exports = InternFactory;

