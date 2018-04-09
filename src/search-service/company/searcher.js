const Connection = require('../../../database/knex-connection');
const CompanyFactory = require('../../company/company-factory');

class Searcher {
    /**
     *
     * @param {Connection}connection
     * @param {CompanyFactory}factory
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory = factory;
    }

    search(condition) {
        let sqlQuery;
        let factory = this.factory;
        sqlQuery =  this.connection('companies').select();
        condition.describe(sqlQuery);
        return sqlQuery.then((result) => {
            return result.map(element => factory.make(element))
        })
    }
}

module.exports = Searcher;
