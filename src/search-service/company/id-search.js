class IdSearch {
    /**
     *
     * @param id
     */
    constructor(id) {
        this.id = id;
    }

    describe(sqlQuery) {
        let id = this.id;
        return sqlQuery.where({
            id : id,
            deleted_at : null
        })
    }
}

module.exports = IdSearch;
