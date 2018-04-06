class Manager {

    /**
     *
     * @param {string}name
     * @param {string}phone
     */
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    getName() {
        return this.name;
    }

    getPhone() {
        return this.phone;
    }

    setId(id) {
        this.id =  id;
    }

    getId(){
        return this.id;
    }

    setGender(gender) {
        this.gender = gender;
    }

    getGender() {
        return this.gender
    }

    setEmail(email) {
        this.email = email;
    }

    getEmail() {
        return this.email
    }

    setAddress(address) {
        this.address = address
    }

    getAddress() {
        return this.address;
    }

    setCompany(company) {
        this.company = company;
    }

    getCompany() {
        return this.company;
    }

}

module.exports = Manager;
