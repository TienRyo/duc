const Connection = require('../../../database/knex-connection');
const InternFactory = require('../../intern/intern-factory');

class Searcher {
    /**
     *
     * @param {Connection}connection
     * @param {InternFactory}factory
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory = factory;
    }

    search(condition) {
        let sqlQuery;
        let factory = this.factory;
        sqlQuery =  this.connection('interns').select();
        condition.describe(sqlQuery);
        return sqlQuery.then((result) => {
           return result.map(element => factory.make(element))
        })
    }
}

module.exports = Searcher;
