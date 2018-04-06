class Company {

    /**
     *
     * @param {string} name
     */
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
    /**
     *
     * @return {int}
     */
    getPhone() {
        return this.phone;
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
     * @return {string}
     */
    getAddress() {
        return this.address;
    }

    /**
     *
     * @return {string|*}
     */
    getEmail() {
        return this.email;
    }

    /**
     *
     * @param {int} id
     */
    setId(id) {
        this.id = id;
    }

    /**
     *
     * @param {integer} phone
     */
    setPhone(phone) {
        this.phone = phone;
    }


    /**
     *
     * @param {string} email
     */
    setEmail(email) {
        this.email = email;
    }

    /**
     *
     * @param {string} address
     */
    setAddress(address) {
        this.address = address;
    }
}

module.exports = Company;
