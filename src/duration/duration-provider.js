const DurationFactory = require('./duration-factory');
const connection  = require('../../database/knex-connection');

let durationFactory = new DurationFactory();


class DurationProvider {
    /**
     *
     * @param {connection} connection
     */
    constructor(connection) {
        this.connection= connection;
    }

    provide(id) {
        return this.connection('durations').where({
            id : id
        }).then(result => {
            return durationFactory.make(result[0])
        })
    }

}

module.exports = DurationProvider;
