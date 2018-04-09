const Company = require('./company');

class CompanyFactory {
    make(raw) {
        let company = new Company(raw.name);
        company.setId(raw.id);
        company.setAddress(raw.address);
        company.setEmail(raw.email);
        company.setPhone(raw.phone);
        return company;
    }
}

module.exports = CompanyFactory;
