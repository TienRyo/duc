class CompanyRepository {
    constructor(connection) {
        this.connection = connection
    }

    add(company) {
        return this.connection('companies').insert({
            name : company.getName(),
            phone: company.getPhone(),
            address : company.getAddress(),
            email   : company.getEmail()
        })
    }
}

module.exports = CompanyRepository;
