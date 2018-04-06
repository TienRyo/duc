class Internship {
    constructor(duration, internshipList, company) {
        this.duration = duration;
        this.internShipList = internshipList;
        this.company = company;
    }

    /**
     *
     * @return {Duration}
     */
    getDuration() {
        return this.duration;
    }

    /**
     *
     * @return {Internship}
     */
    getList() {
        return this.internShipList;
    }

    /**
     *
     * @return {Company}
     */
    getCompany() {
        return this.company;
    }

    /**
     *
     * @return {int|*}
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @param {int} id
     */
    setId(id) {
        this.id =id;
    }
}

module.exports = Internship;
