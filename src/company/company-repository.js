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

    edit(company) {
        return this.connection('companies').update({
            name : company.getName(),
            phone: company.getPhone(),
            address : company.getAddress(),
            email   : company.getEmail()
        }).where({
            id: company.getId()
        })
    }

    remove(id) {
        return this.connection('companies').update({
            deleted_at :  new Date().toLocaleString()
        }).where({
            id:id
        })
    }

    all() {
        return this.connection('companies').where({
            deleted_at: null
        })
    }

}

module.exports = CompanyRepository;
