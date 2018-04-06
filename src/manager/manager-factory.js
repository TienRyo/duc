const CompanyProvider = require('../company/company-provider');
const Manager         = require('./manager');
const connection      = require('../../database/knex-connection');

let companyProvider = new CompanyProvider(connection);

class ManagerFactory {
    make(raw) {
       let manager = new Manager(raw.name, raw.phone);
       manager.setGender(raw.gender);
       manager.setAddress(raw.address);
       manager.setEmail(raw.email);
       return companyProvider.provide(raw.company_id). then(result => {
           manager.setCompany(result);
           return manager;
       })
    }
}

module.exports = ManagerFactory;

