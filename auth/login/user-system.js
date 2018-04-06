class UserRepository {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {User} user
     */
    add(user) {
        return this.connection('login').insert({
            user_name: user.getUser_name(),
            password : user.getPassword()
        });
    }

    edit(user) {
        return this.connection('login').update({
            password: user.getPassword()
        }).where({
            user_name: user.getUser_name()
        });
    }

    remove(user_name) {
        return this.connection('login').update({
            deleted_at: new Date()
        }).where({
            user_name: user_name
        });
    }
}

module.exports = UserRepository;
