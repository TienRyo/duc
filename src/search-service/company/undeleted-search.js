class UndeletedSearch {
    constructor(connection) {
        this.connection = connection;
    }

    describe(sqlQuery) {
        return sqlQuery.where({
            deleted_at:null
        })
    }
}

module.exports = UndeletedSearch;
