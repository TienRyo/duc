const Internship = require('./internship');

class InternshipFactory {
    make(raw) {
        let internship = new Internship();
    }
}

module.exports = InternshipFactory;
