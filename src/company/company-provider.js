const CompanyFactory = require('./company-factory');

let companyFactory = new CompanyFactory();

class CompanyProvider {
    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }


    provide(id) {
        return this.connection('companies')
            .select().where({id : id})
            .then(results => {
                return companyFactory.make(results[0])
            })
    }
}

module.exports = CompanyProvider;
