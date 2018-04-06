class InternshipRegistration {
    /**
     *
     * @param {Intern} intern
     * @param {Internship} internship
     * @param {string} status
     */
    constructor(intern, internship, status) {
        this.intern = intern;
        this.intership = internship;
        this.status = status;
    }

    /**
     *
     * @return {Intern|*}
     */
    getIntern() {
        return this.intern;
    }

    /**
     *
     * @return {Internship|*}
     */
    getInternShip() {
        return this.intership;
    }

    /**
     *
     * @return {string|*}
     */
    getStatus() {
        return this.status;
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
        this.id = id;
    }
}

module.exports = InternshipRegistration;
