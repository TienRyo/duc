class  CodeSearch {
    constructor(code) {
        this.code = code;
    }

    describe(sqlQuery) {
        let code = this.code;
        return sqlQuery.where({
            deleted_at: null,
            code    : code
        })
    }
}

module.exports = CodeSearch;
