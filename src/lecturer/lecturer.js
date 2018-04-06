class Lecturer {

    /**
     *
     * @param {string}name
     * @param {string}code
     */
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }

    /**
     *
     * @return {string|*}
     */
    getCode(){
        return this.code
    }
    /**
     *
     * @return {string}
     */
    getName() {
        return this.name;
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
     * @return {phone|*}
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
     * @param {int} id
     */
    setId(id) {
        this.id = id;
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
     * @return {string|*}
     */
    getEmail() {
        return this.email;
    }

    /**
     *
     * @param  {string} address
     */
    setAddress(address) {
        this.address = address;
    }

    /**
     *
     * @return {string|*}
     */
    getAddress() {
        return this.address;
    }
    setGender(gender) {
        this.gender = gender;
    }

    getGender() {
        return this.gender;
    }
}

module.exports = Lecturer;
