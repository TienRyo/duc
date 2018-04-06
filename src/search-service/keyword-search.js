class KeywordSearch {
    constructor(keyword) {
        this.keyword = keyword;
    }

    describe(sqlQuery) {
        let keyword = this.keyword;
        return sqlQuery
            .where(function () {
                this.where('code', 'like', '%' + keyword + '%')
                    .orWhere('name', 'like', '%' + keyword + '%')
                    .orWhere('status', 'like', '%' + keyword + '%')
                    .orWhere('gender', 'like', '%' + keyword + '%')
                    .orWhere('phone', 'like', '%' + keyword + '%')
                    .orWhere('email', 'like', '%' + keyword + '%')
                    .orWhere('address', 'like', '%' + keyword + '%')
            }).where({
                deleted_at: null
            })
    }
}

module.exports = KeywordSearch;
