const knex                          = require('./database/knex-connection');
const InternshipRegistrationService = require('./src/internship-registration/internship-registration-service');


let internshipRegistrationService = new InternshipRegistrationService(knex);

let registration = {'intern_id': 1, 'intern_ship_id': 1, 'status': 'pending'};

function Test() {
    internshipRegistrationService.send(registration);
    console.log('success')
}

Test();