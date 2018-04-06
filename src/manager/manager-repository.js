class ManagerRepository {
    constructor(connection) {
        this.connection = connection;
    }

    add(manager) {
        return this.connection('company_managers').insert({
            name        : manager.getName(),
            phone       : manager.getPhone(),
            company_id  : manager.getCompany().getId(),
            gender      : manager.getGender(),
            email       : manager.getEmail(),
            address     : manager.getAddress(),
        })
    }
}

module.exports = ManagerRepository;
