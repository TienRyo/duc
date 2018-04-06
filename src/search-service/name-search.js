class NameSearch {
    constructor(name) {
        this.name = name;
    }

    describe(sqlQuery) {
        let name = this.name;
        return sqlQuery.where({
            deleted_at : null,
            name : name
        })
    }
}

module.exports = NameSearch;
