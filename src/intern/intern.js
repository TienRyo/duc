class Intern {

    /**
     *
     * @param code
     * @param name
     */
    constructor(code, name) {
        this.code = code;
        this.name = name
    }

    /**
     *
     * @param {string}status
     */
    setStatus(status) {
        this.status = status
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
    getCode() {
        return this.code;
    }

    /**
     *
     * @return {string|*}
     */
    getName() {
        return this.name;
    }

    /**
     *
     * @return {int|*}
     */
    getPhone() {
        return this.phone;
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
     * @return {string|*}
     */
    getAddress() {
        return this.address;
    }

    /**
     *
     * @param {int} phone
     */
    setPhone(phone) {
        this.phone = phone;
    }

    /**
     *
     * @param {string} address
     */
    setAddress(address) {
        this.address = address;
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
     * @param {string}gender
     */
    setGender(gender) {
        this.gender = gender;
    }
    /**
     *
     * @return {string|*}
     */
    getGender() {
        return this.gender;
    }
}

module.exports = Intern;
