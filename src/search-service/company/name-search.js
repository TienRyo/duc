class NameSearch {
    constructor(name) {
        this.name = name
    }

    describe(sqlQuery) {
        let name = this.name;
        return sqlQuery.where({
            name : name,
            deleted_at : null
        })
    }
}

module.exports = NameSearch;
